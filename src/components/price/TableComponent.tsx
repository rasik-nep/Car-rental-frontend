import { CompactTable } from '@table-library/react-table-library/compact';

type TableComponentProps = {
    prices: Node[];
}

interface Node {
    id: number;
    attributes: {
        name: string;
        price: number;
    }
}

export default function TableComponent({ prices }: TableComponentProps) {
    console.log(prices)
    const nodes: Node[] = prices;

    const COLUMNS = [
        { label: 'SN', renderCell: (item: Node) => item.id },
        {
            label: 'Name',
            renderCell: (item: Node) => item.attributes.name
        },
        { label: 'Price (Per day)', renderCell: (item: Node) => item.attributes.price },
    ];
    const data = { nodes };
    return <CompactTable columns={COLUMNS} data={data} />;
};
