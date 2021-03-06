import * as knex from 'knex'
import { Video } from './models'

export const getVideos = (db: knex) => {
  return db.select('*').from('videos')
}

export const getVideo = (db: knex, id: number) => {
  return db.select('*').where({ id }).from('videos')
}

export const insertVideo = (db: knex, video: Video) => {
  return db.insert(video).into('videos').returning('*')
}

export const newVideo = (obj: { guid?: string }) => {
  let newVideo: Video = { guid: '' }

  if (obj.guid) newVideo.guid = obj.guid

  return newVideo
}
