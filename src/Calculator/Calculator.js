import React, { useState } from 'react'
import './Calculator.css';
import { Button, Checkbox, Form, Input } from 'antd';
import Nav from 'react-bootstrap/Nav';

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);
  const handler = e => {
    setInput(e.target.value);
  }
  return (
    <section className="back">
      <div className="calculator-grid">
        <center>

          {/* <Nav className="me-auto" style={{position: "absolute", top: -42,marginLeft:600}}>
        <Button type="primary" >
          <Nav.Link style={{ padding: 0 }} href="/works">Back</Nav.Link>
        </Button>
      </Nav> */}
          {/* <Form.Item */}
          <Input
            style={{ width: 220, marginTop: 30 }}
            type="text" value={input} name="input" onChange={handler}
            label="Name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
          </Input>
          {/* </Form.Item> */}
          {/* <input type="text" value={input} name="input" onChange={handler} /> */}
          <br />
          <br />

          <Button className='cal-btn' onClick={() => setInput(input + '1')}>1</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '2')}>2</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '3')}>3</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '+')}>+</Button><br />
          <Button className='cal-btn' onClick={() => setInput(input + '4')}>4</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '5')}>5</Button>

          <Button className='cal-btn' onClick={() => setInput(input + '6')}>6</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '-')}>-</Button><br />
          <Button className='cal-btn' onClick={() => setInput(input + '7')}>7</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '8')}>8</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '9')}>9</Button>
          <Button className='cal-btn' onClick={() => setInput(input + '*')}>*</Button><br />
          <Button className='cal-btn' onClick={() => setInput(input + '0')}>0</Button>




          <Button className='cal-btn' onClick={() => setInput(input + '/')}>/</Button>
          <Button className='cal-btn' type="primary" style={{ width: 110 }} htmlType="submit" onClick={() => { setInput(''); setResult(0) }}>clr</Button><br />
          {/* <br/> */}
          <Button className='cal-btn' type="primary" style={{ width: 220 }} htmlType="submit" onClick={() => setResult(eval(input))}>RESULT</Button>
          <h4 className="result">{result}</h4>
        </center>
      </div>
    </section>
  )
}

export default Calculator