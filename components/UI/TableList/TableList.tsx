import Cell from "./Cell";
import Row from "./Row";
import checkEvenNumber from "../../../utils/checkEvenNumber";


const colSpanClasses = {
  1: 'col-span-1',
  2: 'col-span-2',
}

type GridClassType = {
  wrapperClass: string,
  list: number[]
}

type Props = {
  gridClass: GridClassType;
  headers: any;
  content: any;
}

function TableList({gridClass, headers, content}: Props) {

  function getColSpanClass(index: number) {
    const colNum = Number(gridClass.list[index])
    console.log('colNum', typeof colNum)


    //TODO fix bottom condition
    if (colNum === 1 || colNum === 2) {
      console.log('colSpanClasses[colNum]', colSpanClasses[colNum])
      return colSpanClasses[colNum]
    }
  }

  return (
    <div className='rounded overflow-hidden'>
      <Row className={`bg-primary ${gridClass.wrapperClass}`}>
        {headers.map((item: any, index: number) => {
          return (
            <Cell key={index} className={`${getColSpanClass(index)} text-white`}>
              {item}
            </Cell>
          )
        })}
      </Row>

      {content.map((row: any, rowIndex: number) => (
        <Row key={rowIndex} className={`${gridClass.wrapperClass} ${checkEvenNumber(rowIndex) ? 'bg-primary/5' : 'bg-white'}`}>
          {
            row.map((item: any, itemIndex: number) => {
              return (
                <Cell key={itemIndex} className={`${getColSpanClass(itemIndex)}`}>
                  {item}
                </Cell>
              )
            })
          }
        </Row>
      ))}
    </div>
  );
}

export default TableList;