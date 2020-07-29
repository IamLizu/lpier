import { Input, Button } from 'antd'
import utilStyles from '../styles/util.module.css'

const { TextArea } = Input

export default function Render(props) {
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
                    <Button type="primary" size='small'>
                        AGAIN
                    </Button>
                    &nbsp;
                    <Button type="default" size='small'>
                        COPY
                    </Button>
                </div>
            </>
        )
    } else {
        return(
            <></>
        )
    }
}