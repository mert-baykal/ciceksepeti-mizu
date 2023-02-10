import { DummyCategories } from "..";

export default function handler(req, res) {
    res.status(200).json(DummyCategories)
}