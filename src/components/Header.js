import Button from "./Button"

const Header = ({title}) => {

    const onClick = () => {
        console.log('Clicked');
    }

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button onClick={onClick} color="green" text="Add" />
    </header>
  )
}

// const headingStyle = {
//     color: 'yellow',
//     backgroundColor: 'red'
// }

export default Header