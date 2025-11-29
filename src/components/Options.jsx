import Option from './Option';

export default function Options({options, setOption}) {
  return (
    <div className='options'>
      <Option value={options[0]} setOption={setOption}/>
      <Option value={options[1]} setOption={setOption}/>
      <Option value={options[2]} setOption={setOption}/>
    </div>
  )
}