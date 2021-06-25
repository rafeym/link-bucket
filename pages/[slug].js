import React from 'react'
import Slug from '../components/Slug'
import { Snippet } from '../model/Snippet'
import { connectDb } from '../utils/db'

const SlugPage = ({ snippetTxt }) => {
    return (
        <div>
            <Slug snippetTxt={snippetTxt} />
        </div>
    )
}

export default SlugPage

export async function getServerSideProps(context) {
    await connectDb()

    const slug = context.params.slug

    const snipObj = await Snippet.findOne({
        slug,
    })

    return {
        props: {
            snippetTxt: snipObj.snippet,
        },
    }
}
