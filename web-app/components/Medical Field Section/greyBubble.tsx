import { siteConfig } from '@/config/site'
import React from 'react'

type Props = {
    text: string
}

const GreyBubble = (props: Props) => {
  return (
    <div style={{backgroundColor: '#e4e6eb', display: 'flex', flex: 1, padding: 15, borderRadius: 25}}>
      <p style={{color: siteConfig.colorSchemes.primary, fontWeight: '500', fontSize: 17}}>{props.text}</p>
    </div>
  )
}

export default GreyBubble