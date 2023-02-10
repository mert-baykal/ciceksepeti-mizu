import { Dummy } from "../..";

export default function handler(req, res) {

    res.setHeader('Content-Type', 'application/json');
    
    try {
        const text = req.query.text;
        if (text) {
            const filteredDatas = Dummy.filter(product => {
                return product.name.toLocaleLowerCase('tr').indexOf(text.toLocaleLowerCase('tr')) > -1;
            });
            res.status(200).json(filteredDatas);
        }

        res.status(302).json({ error: 'Not found' })
    } catch (error) {
        res.status(500).json({ error: 'Service error' })
    }
}