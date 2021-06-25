import React from 'react'
import { Form, Button } from 'react-bootstrap'
import copy from 'clipboard-copy'

const Slug = ({ snippetTxt }) => {
    return (
        <div className='text-center mt-4'>
            <h1>Snippet</h1>
            <Button
                onClick={() => copy(window.location)}
                className='mb-4 mt-2'
                variant='outline-info'
            >
                Copy Link to Clipboard
            </Button>

            <Form>
                <Form.Group>
                    <Form.Control
                        style={{
                            margin: '0 auto',
                            width: '50%',
                            height: '300px',
                        }}
                        as='textarea'
                        rows={3}
                        value={snippetTxt}
                        disabled
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Slug
