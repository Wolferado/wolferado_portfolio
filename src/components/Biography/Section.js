import { useCollapse } from 'react-collapsed'

const Section = (props) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
        defaultExpanded: false,
        easing: "cubic-bezier(0.5, 0.5, 0.5, 0)",
        duration: 500,
    });

    return (
        <div className="section">
            <h1 className="title-expandable" {...getToggleProps()}>{props.title} {isExpanded ? <sup>Click to Collapse</sup> : <sup>Click to Expand</sup>}</h1>
            <div {...getCollapseProps()}>{props.element}</div>
        </div>
    )
}

export default Section;