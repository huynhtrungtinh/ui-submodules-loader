import React from 'react'
import { LayoutBasic } from './LayoutBasic';
const Layout: React.FC = (props: any) => (<LayoutBasic>
  {props.children}
</LayoutBasic>
)

export const LayoutLogin: React.FC = React.memo(Layout);