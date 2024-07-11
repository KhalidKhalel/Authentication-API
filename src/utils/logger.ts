import logger from 'pino'
import dayjs from 'dayjs'
import config from 'config'

const level = config.get<string>('logLevel')

const log = logger({
    transport:{
        target: 'pino-pretty'
		}, level,
		base:{
		pid: false,
		},
		timestamp: () => dayjs().format('YYYY-MM-DDTHH:mm:ssZ')
});

export default log