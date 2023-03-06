/*eslint-disable */
import { buildClientSchema, getIntrospectionQuery, parse, print, buildSchema, printSchema, graphqlSync } from 'graphql'
import { mergeSchemas } from '@graphql-tools/schema'
import { buildOperationNodeForField } from '@graphql-tools/utils'
import got from 'got'
import * as fs from 'fs'

const getSchemaFromUrl = async (url: string) => {
    const searchParams = {
        query: getIntrospectionQuery().toString(),
    }

    const response = await got.get(url, {
        searchParams,
        responseType: 'json',
    })

    const { data } = response.body as any
    fs.writeFileSync('schema2.txt', JSON.stringify(data))
    return buildClientSchema(data) 
}

// const getSchemaFromFile = async () => {

//     const rawSchema = fs.readFileSync('./src/graphql/local/schema.graphql')
//     const schema = rawSchema.toString()
//     const gqlSchema = buildSchema(schema)
//     const result = graphqlSync(gqlSchema, getIntrospectionQuery().toString()).data as any
//     fs.writeFileSync('schema.txt', JSON.stringify(result))
//     return buildClientSchema(result)
// }

const main = async (urlPath: string) => {
    const schema = await getSchemaFromUrl(urlPath)
    // const localSchema = await getSchemaFromFile()


    // const schema = mergeSchemas({
    //     schemas: [urlSchema, localSchema]
    // })

    const operationsDictionary = {
        query: { ...(schema.getQueryType()?.getFields() ?? {}) },
        mutation: { ...(schema.getMutationType()?.getFields() ?? {}) },
        subscription: { ...(schema.getSubscriptionType()?.getFields() ?? {}) },
    }
   
    let documentString = ''

    for (const [operationKind, operationValue] of Object.entries(operationsDictionary)) {
        for (const operationName of Object.keys(operationValue)) {
            const operationAST = buildOperationNodeForField({
                schema,
                kind: operationKind as any,
                field: operationName,
            })

            documentString += print(operationAST)
        }
    }
    
    return parse(documentString)
}

export default main
