import React from 'react'
import Snippet from '../components/Snippet'
import { useRouter } from 'next/router'

const CreateSnippet = () => {
    const router = useRouter()
    return (
        <>
            <Snippet router={router} />
        </>
    )
}

export default CreateSnippet
