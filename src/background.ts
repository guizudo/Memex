import 'babel-polyfill'
import 'core-js/es7/symbol'

import db, { storageManager } from './search'
import internalAnalytics from './analytics/internal'
import initSentry from './util/raven'

// Features that require manual instantiation to setup
import DirectLinkingBackground from './direct-linking/background'
import EventLogBackground from './analytics/internal/background'
import CustomListBackground from './custom-lists/background'
import NotificationBackground from './notifications/background'
import BackgroundScript from './background-script'

// Features that auto-setup
import './activity-logger/background'
import './search/background'
import './analytics/background'
import './imports/background'
import './omnibar'

initSentry()

const notifications = new NotificationBackground({ storageManager })
notifications.setupRemoteFunctions()

const directLinking = new DirectLinkingBackground({ storageManager })
directLinking.setupRemoteFunctions()
directLinking.setupRequestInterceptor()

const eventLog = new EventLogBackground({ storageManager })
eventLog.setupRemoteFunctions()
internalAnalytics.registerOperations(eventLog)

const customList = new CustomListBackground({ storageManager })
customList.setupRemoteFunctions()

const bgScript = new BackgroundScript({ notifsBackground: notifications })
bgScript.setupRemoteFunctions()
bgScript.setupWebExtAPIHandlers()

// Attach interesting features onto global window scope for interested users
window['db'] = db
window['storageMan'] = storageManager
window['bgScript'] = bgScript
window['eventLog'] = eventLog
window['directLinking'] = directLinking
window['customList'] = customList
window['notifications'] = notifications
