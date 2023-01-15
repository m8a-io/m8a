import { Test, TestingModule } from '@nestjs/testing'
import * as argon2 from 'argon2'
import { HashService } from '../hash.service'


describe('HashService', () => {
  let service: HashService
  const tempPassword = 'thisIsSomePassWord'
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HashService],
    }).compile()

    service = module.get<HashService>(HashService)
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })
  
  describe('getSalt', () => {
    const passWithSalt = 'thisIsSomePassWord:whsW!sinITl6NrthJPVsew=='
    it('should get the salt from the password and salt hash combined string', async () => {
      const salt = await service.getSalt(passWithSalt)
      expect(salt).toEqual('whsW!sinITl6NrthJPVsew==')
    })

    it('should throw an error, if the password with salt string is malformed', () => {
      const passWithSaltIncorrect = 'someIncorrectString'
      expect(service.getSalt(passWithSaltIncorrect)).rejects.toEqual(Error('Password with Salt string is malformed.'))
    })
    
    it('should throw an error, if the password with salt string is malformed: hash is too small', () => {
      const passWithSaltTooSmall = 'thisIsSomePassWord:wKhsW!si=='
      expect(service.getSalt(passWithSaltTooSmall)).rejects.toEqual(Error('Salt is too small. Must be at least 24 characters long.'))
    })
  })

  describe('getPasswordWithSalt', () => {
    it('should create a password and salt combined string with a password input', async () => {
      const passWithSalt = await service.getPasswordWithSalt(tempPassword)
      const passWithSaltParts = passWithSalt.split(':')
      expect(passWithSaltParts[0]).toEqual(tempPassword)
      expect([...passWithSaltParts[1]].length).toEqual(24)
    })

    it('should create a password and salt combined string with a password and salt input', async () => {
      const salt = 'wKhsW!sinITl6NrthJPVsew=='
      const passWithSalt = await service.getPasswordWithSalt(tempPassword, salt)
      const passWithSaltParts = passWithSalt.split(':')
      expect(passWithSaltParts[0]).toEqual(tempPassword)
      expect(salt).toEqual('wKhsW!sinITl6NrthJPVsew==')
    })

    it('should throw an error, if the given salt is too small.', () => {
      const saltTooSmall = 'wKhsW!sinITl6Nrth'
      expect(service.getPasswordWithSalt(tempPassword, saltTooSmall)).rejects.toEqual(Error('Salt is too small. Must be at least 24 characters long.'))
    })
  })

  describe('hashPassword', () => {
    const passWithSalt = 'blah:1n14IKzVhkIl40J4t+FHUA=='

    it('should create a hashed password', async () => {
      const hashSpy = jest.spyOn(argon2, "hash").mockResolvedValueOnce('$argon2id$v=19$m=4096,t=3,p=1$MuuJhFIytvTeU2JTHd6t8A$mWYVCRQhdUnFpV5dmjmK8Kr61ERYRTQhplZD7tIjmjE')
      const hashedPassword = await service.hashPassword(passWithSalt)
      const hashedPasswordParts = hashedPassword.split(',')
      expect(hashedPasswordParts[0].startsWith('$argon2id')).toEqual(true)
      expect([...hashedPasswordParts[2]].length).toBeGreaterThanOrEqual(68)
      expect(hashSpy).toHaveBeenCalledWith(passWithSalt, { "type": 2 })
      jest.clearAllMocks()
    })

    it('should throw an error, if the password with salt string is malformed', () => {
      const passWithSaltIncorrect = 'someIncorrectString'
      expect(service.hashPassword(passWithSaltIncorrect)).rejects.toEqual(Error('Password with Salt string is malformed.'))
    })
    
    it('should throw an error, if the password with salt string is malformed: hash is too small', () => {
      const passWithSaltTooSmall = 'thisIsSomePassWord:wKhsW!si=='
      expect(service.hashPassword(passWithSaltTooSmall)).rejects.toEqual(Error('Salt is too small. Must be at least 24 characters long.'))
    })
  })

  describe('verifyPassword', () => {
    const hashedPassword = '$argon2id$v=19$m=4096,t=3,p=1$MuuJhFIytvTeU2JTHd6t8A$mWYVCRQhdUnFpV5dmjmK8Kr61ERYRTQhplZD7tIjmjE'
    const passWithSalt = 'blah:1n14IKzVhkIl40J4t+FHUA=='
    
    it('should verify if the password with salt hash is valid against the stored hash', async () => {
      const verifySpy = jest.spyOn(argon2, "verify").mockResolvedValueOnce(true)
      const valid = await service.verifyPassword(passWithSalt, hashedPassword)
      expect(valid).toBe(true)
      expect(verifySpy).toHaveBeenCalled()
    })

    it('should return false if the password with salt hash is invalid against the stored hash', async () => {
      const verifySpy = jest.spyOn(argon2, "verify").mockResolvedValueOnce(false)
      const wrongPassWithSalt = 'thisIsTheWrongPassWord:B5kQNRsGPi8cKAXLQ11Cag=='
      const valid = await service.verifyPassword(wrongPassWithSalt, hashedPassword)
      expect(valid).toBe(false)
      expect(verifySpy).toHaveBeenCalled()
    })

    it('should throw an error, if the password with salt string is malformed', async () => {
      const badPassWithSalt = 'thisIsSomePassWordB5kQNRsGPi8cKAXLQ11Cag=='
      const hashedPassword = 'someStringToFakeAsHash'
      expect(service.verifyPassword(badPassWithSalt, hashedPassword)).rejects.toEqual(Error('Password with Salt string is malformed.'))
    })
    
    it('should throw an error, if the password with salt string is malformed: hash is too small', () => {
      const passWithSaltTooSmall = 'thisIsSomePassWord:wKhsW!si=='
      const hashedPassword = 'someStringToFakeAsHash'
      expect(service.verifyPassword(passWithSaltTooSmall, hashedPassword)).rejects.toEqual(Error('Salt is too small. Must be at least 24 characters long.'))
    })

    it('should throw an error, if the password from the database is malformed', async () => {
      expect(service.verifyPassword(passWithSalt, hashedPassword.substring(1))).rejects.toEqual(Error('Validation of password failed with error: TypeError: pchstr must contain a $ as first char.'))
    })
  })
})
