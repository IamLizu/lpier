import { Input, Button, Alert } from 'antd'
import utilStyles from '../styles/util.module.css'

const { TextArea } = Input

export default function Render(props) {
    const copyToClip = () => {
        navigator.clipboard.writeText(JSON.stringify(props.data))
    }

    const resetEnv = () => {
        props.update('', 'initial')
    }

    if (props.state == "renderData") {
        return(
            <>
                <TextArea
                    className={utilStyles.renderBox}
                    autoSize
                    value={JSON.stringify(props.data)}
                />
                <br></br>
                <div className={utilStyles.flexBaseline}>
                    <Button type="primary" size='small' onClick={resetEnv}>
                        AGAIN
                    </Button>
                    &nbsp;
                    <Button type="default" size='small' onClick={copyToClip}>
                        COPY
                    </Button>
                </div>
            </>
        )
    } 
    if (props.state == "renderError") {
        return(
            <>
                <Alert
                    message="Errrr!"
                    description={props.data}
                    type="error"
                    showIcon
                    closable
                    onClose={resetEnv}
                />
            </>
        )
    } else {
        return(
            <></>
        )
    }
}