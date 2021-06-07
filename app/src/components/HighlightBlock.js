  
import Popular from './Popular';
import New from './New';

export const HighlightBlock = (Component) => (props) => {
    if (props.views >= 1000) {
        return(
            <Popular>
              <Component {...props} />
            </Popular>
        );
    } else if (props.views < 100) {
        return(
            <New>
                <Component {...props} />
            </New>
        );
    } else {
        return (
            <Component {...props} />
        )
    }  
};