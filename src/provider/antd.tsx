import { themeConfig } from '@config'
import { ConfigProvider } from 'antd'

export const AntdProvider = ({ children }: { children: React.ReactNode }) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>
}
