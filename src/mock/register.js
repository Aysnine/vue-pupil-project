import MockSuit from '@/lib/main/mock-suit'
import db from './db.js'

import app from '@/mock/app'
import dash from '@/mock/admin/dash'

MockSuit.extend('db', db)

MockSuit.load(app)
MockSuit.load(dash)
