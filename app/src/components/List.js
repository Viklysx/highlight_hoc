import Video from './Video';
import Article from './Article';
import { nanoid } from 'nanoid'

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} key={nanoid()} />
                );

            case 'article':
                return (
                    <Article {...item} key={nanoid()} />
                );
        }
    });
};