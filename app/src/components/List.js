import Video from './Video';
import Article from './Article';
import {HighlightBlock} from './HighlightBlock';


export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    HighlightBlock(Video)({...item})
                );

            case 'article':
                return (
                    HighlightBlock(Article)({...item})
                );
        }
    });
};