import ListContent from '@/app/components/pages/Lists/List/page';
import { ListPageProps } from './types';

const List = ({ params }: ListPageProps) => <ListContent params={params} />;

export default List;
