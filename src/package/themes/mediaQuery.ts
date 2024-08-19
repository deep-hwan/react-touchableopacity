import { TabTheme } from './tab'
import { TabMediaQueryType, TabType } from '../types/tab'

const ViewThemes = (props: TabType) => TabTheme(props)

export const extandedMediaQuery = ({ mediaQuery }: TabMediaQueryType) => {
    const mq_theme = () => {
        if (mediaQuery) {
            return {
                s1440: {
                    ...(ViewThemes(mediaQuery.s1440 || {}) as any),
                    '&:hover': ViewThemes(mediaQuery.s1440?.hover || {}) as any,
                    '&:active': ViewThemes(mediaQuery.s1440?.active || {}) as any,
                },
                s1280: {
                    ...(ViewThemes(mediaQuery.s1280 || {}) as any),
                    '&:hover': ViewThemes(mediaQuery.s1280?.hover || {}) as any,
                    '&:active': ViewThemes(mediaQuery.s1280?.active || {}) as any,
                },
                s1080: {
                    ...(ViewThemes(mediaQuery.s1080 || {}) as any),
                    '&:hover': ViewThemes(mediaQuery.s1080?.hover || {}) as any,
                    '&:active': ViewThemes(mediaQuery.s1080?.active || {}) as any,
                },
                s768: {
                    ...(ViewThemes(mediaQuery.s768 || {}) as any),
                    '&:hover': ViewThemes(mediaQuery.s768?.hover || {}) as any,
                    '&:active': ViewThemes(mediaQuery.s768?.active || {}) as any,
                },
                s600: {
                    ...(ViewThemes(mediaQuery.s600 || {}) as any),
                    '&:hover': ViewThemes(mediaQuery.s600?.hover || {}) as any,
                    '&:active': ViewThemes(mediaQuery.s600?.active || {}) as any,
                },
                s428: {
                    ...(ViewThemes(mediaQuery.s428 || {}) as any),
                    '&:hover': ViewThemes(mediaQuery.s428?.hover || {}) as any,
                    '&:active': ViewThemes(mediaQuery.s428?.active || {}) as any,
                },
            }
        }
    }

    const screenSize = [1440, 1280, 1080, 768, 600, 428]
    const MQ = screenSize.map((bp) => `@media (max-width: ${bp}px)`)

    return {
        [MQ[0]]: { ...(mq_theme()?.s1440 as any) },
        [MQ[1]]: { ...(mq_theme()?.s1280 as any) },
        [MQ[2]]: { ...(mq_theme()?.s1080 as any) },
        [MQ[3]]: { ...(mq_theme()?.s768 as any) },
        [MQ[4]]: { ...(mq_theme()?.s600 as any) },
        [MQ[5]]: { ...(mq_theme()?.s428 as any) },
    }
}
