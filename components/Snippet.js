import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const Snippet = ({ router }) => {
    const [snippet, setSnippet] = useState('')

    const handleChange = (e) => {
        const { value } = e.target
        setSnippet(value)
    }

    const saveSnippet = async (e) => {
        const res = await fetch('/api/snippets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ snippet }),
        })
        const createdSnippet = await res.json()
        router.push(`/${createdSnippet.slug}`)
    }

    return (
        <div className='text-center mt-4'>
            <h1>Upload your (code, text, secret message) snippet now!</h1>
            <p>
                Paste down below into the textarea, save it, and share the link
                with friends.
            </p>
            <Form>
                <Form.Group>
                    <Form.Control
                        style={{
                            margin: '0 auto',
                            width: '100%',
                            height: '300px',
                        }}
                        as='textarea'
                        rows={3}
                        value={snippet}
                        onChange={handleChange}
                        maxLength='1000'
                    />
                </Form.Group>
                <Button
                    className='mt-4'
                    variant='outline-info'
                    size='lg'
                    onClick={saveSnippet}
                >
                    Upload Snippet
                </Button>
            </Form>
        </div>
    )
}

export default Snippet
