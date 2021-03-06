import React from 'react'
import styled, { css } from 'styled-components'
// component rendering the svg block with the symbol elements used as icons
const SVGIcons = () =>
<svg display="none" viewBox="0 0 100 100">
  <symbol id="dostupno" viewBox="0 0 100 100" >
      <g
          fill="currentColor">
          <circle
              cx="50"
              cy="50"
              r="50">
          </circle>
          <circle
              cx="50"
              cy="50"
              r="4"
              fill="#fff">
          </circle>
      </g>
  </symbol>
  <symbol id="rezervisano" viewBox="0 0 100 100">
      <g
          fill="currentColor">
          <circle
              cx="50"
              cy="50"
              r="50">
          </circle>
          <g
              fill="#000"
              opacity="0.2">
              <circle
                  cx="50"
                  cy="42"
                  r="15">
              </circle>
              <circle
                  cx="50"
                  cy="110"
                  r="40">
              </circle>
          </g>
      </g>
  </symbol>
  <symbol id="izabrano" viewBox="0 0 100 100">
      <g
          fill="currentColor">
          <circle
              cx="50"
              cy="50"
              r="50">
          </circle>
          <text
              x="50"
              y="65"
              fontSize="2.7rem"
              textAnchor="middle"
              fill="#fff">
              1
          </text>
      </g>
  </symbol>
</svg>;


// component to inject the icon created through a symbol element
// render the svg icon using the href passed as props
const Icon = ({href, size = 100}) =>
<svg className={href} width={size} height={size}>
  <use href={`#${href}`}/>
</svg>;



// header component and displaying a heading 
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  position: relative;
`;
const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  flex-grow: 1;
  font-weight: 900;
  padding-top: 20px;
`;

// render the two buttons making use of the Icon component
const Header = () => {
  return(
    <HeaderContainer>
      <HeaderTitle>Izaberi sedište:</HeaderTitle>
    </HeaderContainer>
  );
}


// display the legend items side by side, prefaced by a matching icon
const LegendContainer = styled.div`
display: flex;
margin: 1.25rem 0;
justify-content: center;
`;
const LegendItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.35rem;

  svg {
    margin-right: 0.2rem;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
`;
const LegendItemName = styled.span`
  text-transform: capitalize;
  color: hsl(0deg 0% 60%);
  letter-spacing: 0.05rem;
  font-weight: 700;
  font-size: 18px;
`;

const Legend = () => {
  const items = ['dostupno', 'rezervisano', 'izabrano'];
  return(
    <LegendContainer>
      {
        items.map(item => <LegendItem key={item}>
            <Icon href={item} size="16" />
            <LegendItemName>{item}</LegendItemName>
          </LegendItem>
        )
      }
    </LegendContainer>
  );
}


// render a paragraph describing the screen atop a grid describing the seats
const TheaterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.75rem 0;
`;


const TheaterSeats = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(20, 18px);
  grid-template-rows: repeat(10, 18px);
  grid-gap: 0.75rem 0.3rem;
  grid-auto-flow: dense;
`;

// invisible div used to create whitespace in the grid
const FillerSeat = styled.div`
  visibility: hidden;
  opacity: 0;
  &:nth-child(2) {
    grid-column: 10/11;
    grid-row: 1/2;
  }
  &:nth-child(3) {
    grid-row: 6/11;
    grid-column: 1/2;
  }
  &:nth-child(4) {
    grid-column: 10/11;
    grid-row: 6/11;
  }
`;
// actual seat highlighted through an icon
const Seat = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: none;
  border: none;

  svg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    pointer-events: none;
  }
`;

// render the paragraph and the grid of seats with the scheduled whitespace
const Theater = ({seats = [], toggleSeat}) => {
  // four FillerSeat components, occupying the selected space in the group
  const FillerSeats = Array(0).fill('').map((item, i) => <FillerSeat key={i}/>);
  const Seats = seats.map((seat, i) => <Seat onClick={toggleSeat} data-index={i} data-status={seat} key={i}><Icon href={seat} size="16" /></Seat>)
  return(
    <TheaterContainer>
      <TheaterSeats>
        {
          FillerSeats
        }
        {
          Seats
        }
      </TheaterSeats>
    </TheaterContainer>

  );
}



// include the details followed by a non-wrapping, overflowing row of buttons
const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 1rem 2rem 1rem;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 0.2rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px hsla(0, 0%, 0%, 0.3);
  }
  &::-webkit-scrollbar-thumb {
    background: hsl(0, 0%, 90%);
    border-radius: 5px;
  }
`;
const DetailsHeading = styled.h4`
  font-weight: 700;
  font-size: 20px;
  padding: 0.5rem 0;
`;
const DetailsButton = styled.button`
  flex-shrink: 0;
  background: none;
  font-family: inherit;
  font-size: 1rem;
  color: hsl(0deg 0% 60%);
  border: 1px solid currentColor;
  padding: 0.25rem 0.5rem 0.25rem 1rem;
  border-radius: 20px;
  margin: 0 0.5rem;
  display: flex;
  align-items: flex-end;
  text-transform: capitalize;

  svg {
    width: 12px;
    height: 12px;
    margin-left: 0.35rem;
    pointer-events: none;
  }
`;
// for each selected seat include a button with the close icon
const Details = ({selectedSeats = [], removeSeat}) => {
  // {
  //   seat: 4,
  //   price: '$6',
  // },

  // in the button include the text in the following format
  // row: 7 seat: 4 price: $16
  return(
    <DetailsContainer>
      {
        selectedSeats.map(selectedSeat => {
          const entries = Object.entries(selectedSeat);
          return <DetailsButton onClick={removeSeat} key={entries[0][1]} data-index={entries[0][1]}>
            {
              entries.map(([property, value]) => `${property}: ${value}`).join(' ').trim()
            }
            <Icon href="close" size="12" />
          </DetailsButton>;
        })
      }
    </DetailsContainer>
  );
}




// display the sum and the call to action in the bold button using the accent color as background
const CheckoutContainer = styled.button`
  margin-top: 1.75rem;
  margin: 0 auto;
  width: 200px;
  background: var(--accent, #fd6d8e);
  box-shadow: 0 2px 5px -4px currentColor;
  padding: 0.75rem 1rem;
  border-radius: 15px;
  font-family: inherit;
  color: var(--background, #ffffff);
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CheckoutTotal = styled.strong`
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
`;
const CheckoutAction = styled.span`
  font-size: 0.9rem;
`;

const Checkout = ({total = 0}) => {
  return(
    <CheckoutContainer>
      <CheckoutTotal>{total} RSD</CheckoutTotal>
      <CheckoutAction>Checkout</CheckoutAction>
    </CheckoutContainer>
  );
}




// phone screen as a rounded box with a noticeable shadow
// update the custom properties according to the theme variable
const Screen = styled.div`
  --color: ${({theme}) => theme === 'light' ? '#2c2f62' : '#eee'};
  --background: ${({theme}) => theme === 'light' ? '#fff' : '#2c2f62'};
  --accent: ${({theme}) => theme === 'light' ? '#fd6d8e' : '#fcb43c'};
  border-radius: 10px;
  width: 100%;
  min-height: 500px;
  color: var(--color, #2c2f62);
  background: var(--background, #ffffff);
  padding: 2rem 2rem 1.25rem;
  box-shadow: 0 2px 10px -8px hsla(0, 0%, 0%, 0.4);
  margin: 0.5rem;
`;

// render the components making up the screen
// use the theme in the styled component
// pass the array of seats and the sum to the fitting components
const Phone = ({theme, seats, total, toggleSeat, removeSeat, selectedSeats}) => (
  <Screen theme={theme}>
    <Header />
    <Legend />
    <Theater seats={seats} toggleSeat={toggleSeat} />
    <DetailsHeading>Detalji:</DetailsHeading>
    <Details selectedSeats={selectedSeats} removeSeat={removeSeat} />
    <Checkout total={total} />
  </Screen>
)


// container describing a wrapping row
const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
// create a function which returns a random item from an array
// const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// app component to manage the state of the application and render the phone screen(s)
class MainPage extends React.Component {
  constructor(props) {
    super(props);
    /**
     * seats describing the actual values
     * possibleSeats describing the possible values
     * selectedSeats describing the seat with the matching attribute
     * total to indicate the sum
     */
    this.state = {
      seats: [],
      possibleSeats: ['dostupno', 'rezervisano'],
      possibleSeats1: ['dostupno', 'rezervisano'],
      selectedSeats: [],
      total: 0,
      price: 500,
    }
    // toggleSeat function tied to each button in the theater component
    this.toggleSeat = this.toggleSeat.bind(this);
    // removeSeat function tied to each button in the detail component
    this.removeSeat = this.removeSeat.bind(this);

    // update state to have the seats array update the selectedSeats and the total as well
    this.updateState = this.updateState.bind(this);
  }

  updateState(seats) {
    const { price } = this.state;
    // compute the total as 6 bucks for each selected seat
    const total = seats.reduce((acc, curr) => {
      const isSelected = curr === 'izabrano';
      return isSelected ? acc + price : acc;
    }, 0);

    // estimate the selected seats considering the
    const selectedSeats = [];
    seats.forEach((seat, index) => {
      if(seat === 'izabrano') {
        selectedSeats.push({
          Sedište: index + 1,
          price: `${price} RSD`
        })
      }
    })
    // update the state
    this.setState({
      seats,
      total,
      selectedSeats,
    });
  }

  // function to select/de select an available seat
  toggleSeat(e) {
    // retrieve the button and the indicative attributes
    const { target } = e;
    const seatIndex = target.getAttribute('data-index');
    const seatStatus = target.getAttribute('data-status');

    // if reserved pre-emptively return the function
    if(seatStatus === 'rezervisano') {
      return false;
    } else {
      // else retrieve the previous array, include in its place the value opposite to the existing one
      const { seats: prevSeats } = this.state;
      const index = Number.parseInt(seatIndex, 10);
      const status = seatStatus === 'dostupno' ? 'izabrano' : 'dostupno';
      // update the data attribute
      target.setAttribute('data-status', status);
      // update the seats array
      const seats = [...prevSeats.slice(0, index), status, ...prevSeats.slice(index + 1)];

      // call a function to update the state on the basis of the new array
      this.updateState(seats);
    }
  }

  // function to remove the seat selected in the details component
  removeSeat(e) {
    // retrieve the index through the data attribute
    const { target } = e;
    const seatIndex = target.getAttribute('data-index');
    // update the state removing the selected item
    const { seats: prevSeats } = this.state;
    const index = Number.parseInt(seatIndex, 10);
    const seats = [...prevSeats.slice(0, index), 'dostupno', ...prevSeats.slice(index + 1)];

    this.updateState(seats);
  }

  // when the component mounts update the seats array filling it with 88 values using the possibleSeats options
  componentDidMount() {
    const { possibleSeats } = this.state;
    const { possibleSeats1 } = this.state;
    const seats = [];
    const sector = [];
    
    for(let i = 0; i < 100; i +=1) {
      seats.push(possibleSeats[0]);
      sector.push(1);
    }
    for(let i = 100; i < 200; i++) {
      seats.push(possibleSeats1[0]);
      sector.push(2);
      console.log(sector);
    }
    
    
    this.setState({
      seats,
    })
  }

  // render the phone screen(s) in the wrapping container, following the SVG component including the symbol elements for the icons
  render() {
    const { seats, total, selectedSeats } = this.state;
    return(
      <Main>
        <div id="mainPage"></div>
        {/* <div className="firstSector"></div>
        <div className="secondSector"></div>
        <div className="thirdSector"></div>
        <div className="FourthSector"></div> */}
        <SVGIcons />
        <Phone theme="light" total={total} seats={seats} toggleSeat={this.toggleSeat} removeSeat={this.removeSeat} selectedSeats={selectedSeats} />
      </Main>
    );
  }
}


// ReactDOM.render(<App />, document.getElementById('root'));
export default MainPage
