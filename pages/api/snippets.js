import { connectDb } from '../../utils/db'
import { Snippet } from '../../model/Snippet'
import randomstring from 'randomstring'

export default async (req, res) => {
    await connectDb()
    if (req.method === 'POST') {
        const slug = randomstring.generate({
            length: 12,
            charset: 'alphabetic',
        })
        const snippet = await Snippet.create({
            snippet: req.body.snippet,
            slug,
        })
        res.status(200).json(snippet)
    } else {
        throw new Error('Unable to reach endpoint')
    }
}
