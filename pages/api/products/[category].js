import { Dummy } from "..";

export default function handler(req, res) {

    res.setHeader('Content-Type', 'application/json');
    const category = req.query.category;

    if (category) {
        const filteredDatas = Dummy.filter(product => product.categories.indexOf(category) > -1);
        res.status(200).json(filteredDatas);
    }

    res.status(200).json(Dummy)
}