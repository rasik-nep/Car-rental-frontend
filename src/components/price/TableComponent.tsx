import { CompactTable } from '@table-library/react-table-library/compact';
import { PRICE_LIST } from '../../constants';

interface Node {
    id: number;
    name: string;
    price: string;
}

const nodes: Node[] = PRICE_LIST;

const COLUMNS = [
    { label: 'SN', renderCell: (item: Node) => item.id + 1 },
    {
        label: 'Name',
        renderCell: (item: Node) => item.name
    },
    { label: 'Price (Per day)', renderCell: (item: Node) => item.price },
];

export default function TableComponent() {
    const data = { nodes };
    return <CompactTable columns={COLUMNS} data={data} />;
};
