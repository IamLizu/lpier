import React, { useState } from 'react'
import { Input, Button, Alert } from 'antd'
import utilStyles from '../styles/util.module.css'


export default function Fetch(props){
    if(props.state == 'initial') {
        const [webpage, setUrl] = useState("")

        const showNotice = () => {
            document.getElementById('infoOGD').style.display = 'block'
        }

        const hideNotice = () => {
            document.getElementById('infoOGD').style.display = 'none'
        }

        const watchURL = element => {
            setUrl(element.target.value)
        }

        const hideErrorN = () => {
            document.getElementById('errorGET').style.display = 'none'
        }

        const getData = async () => {
            if(webpage) {
                document.getElementById('infoGET').style.display ='block'

                const rawData = await fetch(`https://cors-anywhere.herokuapp.com/${webpage}`)
                const data = await rawData.text()

                let virDom = document.createElement( 'html' )
                virDom.innerHTML = data

                try{
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
                    props.update(metas, 'renderData')
                } catch {
                    props.update("Couldn't fetch meta data! Maybe the webpage doesn't have enough information required to generate link preview.", 'renderError')
                    console.log(virDom)
                }
            } else {
                document.getElementById('errorGET').style.display = 'block'
            }
        }

        return(
            <>
                <br></br><br></br>
                <div className={utilStyles.flexBaseline}>
                    <div>
                        <Input
                            placeholder="enter webpage address"
                            size='middle'
                            style={{ 
                                width: 300
                            }}
                            onChange={watchURL}
                            onFocus={hideErrorN}
                            onMouseOut={hideNotice}
                            onInput={showNotice}
                        />
                    </div>
                    <div>
                        <Button type="primary" size='middle' onClick={getData}>
                            GET
                        </Button>
                    </div>
                </div>
                <br/>
                <div id="errorGET" style={{ display: 'none'}}>
                    <Alert
                        style={{ fontSize: 11 }}
                        message="Whoa! Atleast enter something! But I like valid webpage addresses."
                        type="error"
                        showIcon
                    />
                </div>
                <br/>
                <div id="infoOGD" style={{ display: 'none'}}>
                    <Alert style={{ fontSize: 11 }} message="Make sure the webpage has open graph meta data." type="info" showIcon/>
                </div>
                <br/>
                <div id="infoGET" style={{ display: 'none'}}>
                    <Alert style={{ fontSize: 11 }} message="Please wait while I am fetching the info." type="info" showIcon/>
                </div>
            </>
        )
    } else {
        return(
            <></>
        )
    }
}