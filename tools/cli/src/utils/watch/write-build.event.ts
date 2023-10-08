import { WatchProject } from './watch-project'

export class WriteBuildEvent {
  public project: WatchProject
  public payload: ArrayBuffer
}
