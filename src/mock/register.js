import MockSuit from '@/lib/mock-suit'
import app from '@/mock/app'
import db from './db.js'

MockSuit.extend('db', db)
MockSuit.load(app)
