import React, { useState } from 'react'
import { Input as TextField, Button } from 'antd'
import utilStyles from '../styles/util.module.css'

export default function Fetch(){
    const [metaData, setMeta] = useState({})
    const [webpage, setUrl] = useState("")

    const watchURL = element => {
        setUrl(element.target.value)
    }

    const getData = async () => {
        const rawData = await fetch(`https://cors-anywhere.herokuapp.com/${webpage}`)
        const data = await rawData.text()

        let virDom = document.createElement( 'html' )
        virDom.innerHTML = data

        let title = virDom.querySelector("meta[property='og:title']").getAttribute('content')
        let url = virDom.querySelector("meta[property='og:url']").getAttribute('content')
        let des = virDom.querySelector("meta[property='og:description']").getAttribute('content')
        let img = virDom.querySelector("meta[property='og:image']").getAttribute('content')

        let metas = {
            "title": title,
            "description": des,
            "image": img,
            "url": url
        }       
        setMeta(metas)
    }

    return(
        <div className={utilStyles.flexBaseline}>
            <div>
                <TextField
                    placeholder="enter webpage address"
                    size='middle'
                    style={{ 
                        width: 300
                    }}
                    onChange={watchURL}
                />
            </div>
            <div>
                <Button type="primary" size='middle' onClick={getData}>
                    GET
                </Button>
            </div>
            {console.log(metaData)}
        </div>
    )
}