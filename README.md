# Aviation Gateboard

- Aviation Gateboard looks up flights for an airport. 
- Type the airport as desire,(the airport needs to be the three letter code, such as: Salt Lake City as SLC. )
- Then choose Departures or Arrivals. It will show flight list of departures/arrivals.
- Tap a flight to see the airline, time, and gate.

The app uses the Aviationstack flights API. The free plan only includes that endpoint, so the two calls are:

- Departures: `GET /v1/flights?dep_iata=SLC`
- Arrivals: `GET /v1/flights?arr_iata=SLC`

Each call returns a list of flights in JSON. The app asks for 10 flights so it stays inside the free plan’s 100 requests per month.

## Run the app

1. Copy `.env.example` to `.env`.
2. Add your Aviationstack key:

```bash
EXPO_PUBLIC_AVIATIONSTACK_KEY=your_key_here
```

3. Start the app:

```bash
npm install
npx expo start
```

`.env` is in `.gitignore`, so the key is not uploaded to GitHub.

## HIG - Human Interface Guidelines

### Buttons
https://developer.apple.com/design/human-interface-guidelines/buttons
"- When buttons are instantly recognizable and easy to understand, an app tends to feel intuitive and well designed.
- Ensure that each button clearly communicates its purpose. 
"
My buttons on index page, are Departures and Arrivals, clear and follows waht it will show after click.

### Showing progress:
https://developer.apple.com/design/human-interface-guidelines/loading#Showing-progress
- "Clearly communicate that content is loading and how long it might take to complete."

While flights are loading, the screen shows a spinner and the words “Loading flights...”. If the request fails, it shows the error and a Try again button. If an airport has no flights, the list says so instead of staying blank. The app does not call the API until the airport code is three letters.
