function RepeatedItemView(props) {

    let str = "";
    for (let v=0; v<props.value; v++) {
        str += props.pattern;
    }
    return (       
       <div>{props.value}: {str}</div>
    );
  }
  
export default RepeatedItemView;