import MockSuit from '@/lib/main/mock-suit'
import db from './db.js'

import app from '@/mock/app'
import dash from '@/mock/admin/dash'
import task from '@/mock/admin/task'
import summary from '@/mock/admin/summary'

MockSuit.extend('db', db)

MockSuit.load(app)
MockSuit.load(dash)
MockSuit.load(task)
MockSuit.load(summary)
