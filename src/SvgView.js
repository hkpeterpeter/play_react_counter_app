function SvgView(props) {
    const radius = props.radius;
    const v = radius ; 
    const vz = v * 2;
    const vstr = `${-v} ${-v} ${vz} ${vz}`;

    return (
        <svg viewBox={vstr} style={{width: "200px", height: "200px"}} >
            <circle r={radius}  />
            <line x1={-v} y1={0} x2={v} y2={0} style={{stroke: "red"}} /> 
            <text x={0} y={0} style={{fill: "red"}}>{radius*2}</text>
        </svg>
    );
  }
  
export default SvgView;