import type { CSSProperties, FC, PropsWithChildren } from 'react'
import type { MainFooterProps } from '../../organisms/Footer/MainFooter/MainFooter.js'
import { MainFooter } from '../../organisms/Footer/MainFooter/MainFooter.js'
import type { MainHeaderProps } from '../../organisms/Header/MainHeader/MainHeader.js'
import {
  MainHeader,
  MainHeaderContext,
  useSimpleMainHeaderContextController,
} from '../../organisms/Header/MainHeader/MainHeader.js'
import { LayoutContainer } from '../LayoutContainer/LayoutContainer.js'
// import { StateContext } from '../../../../react-app-lib/devModeContextProvider'
import './MainLayout.scss'
// import { StateContext } from './Providers'

export type MainLayoutProps = {
  headerProps: MainHeaderProps
  footerProps: MainFooterProps
}

export type MainLayoutUIProps = {
  defaultHideSearchbox?: boolean
  style?: CSSProperties
  streched?: boolean
}

export const MainLayout: FC<PropsWithChildren<MainLayoutProps & MainLayoutUIProps>> = ({
  headerProps,
  footerProps,
  style,
  streched,
  defaultHideSearchbox = false,
  /* contentStyle, */ children,
}) => {
  // const [collapsed, onCollapse] = useState(false)
  // const { routes } = useContext(RouterCtx)

  // const stateContext = useContext(StateContext)

  // const styleContext = useContext(AdminSettingsCtx)
  const mainHeaderContextValue = useSimpleMainHeaderContextController(defaultHideSearchbox)

  return (
    <MainHeaderContext.Provider value={mainHeaderContextValue}>
      <LayoutContainer>
        <div
          className={`main-layout ${streched ? 'streched' : ''}`}
          style={{
            ...style,
            // TODO //@ALE Send context to higher levels
            // ...getColorPalette(styleContext.appearanceData.color),
            // ...styleContext.style,
          }}
        >
          <MainHeader {...headerProps} />
          <div
            style={
              {
                /* ...contentStyle */
              }
            }
            className="content"
          >
            <div className="service-retirement-notice">
              <p>
                <strong>Notice of Service Retirement</strong>
              </p>
              <p>
                <strong>
                  moodle.net will shut down on 20 April 2026. Please download any content or data
                  you wish to keep before this date, as the service and all associated accounts will
                  be permanently shut down after that date.
                </strong>
              </p>
            </div>
            {children}
          </div>
          <MainFooter {...footerProps} />
        </div>
      </LayoutContainer>
    </MainHeaderContext.Provider>
  )
}

MainLayout.defaultProps = {}
export default MainLayout
