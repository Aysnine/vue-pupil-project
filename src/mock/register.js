import MockSuit from '@/lib/main/mock-suit'
import db from './db.js'

import app from '@/mock/app'

MockSuit.extend('db', db)

MockSuit.load(app)
