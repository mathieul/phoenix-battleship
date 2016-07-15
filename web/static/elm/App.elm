module App exposing (initialModel, update, subscriptions, view)

import Html exposing (Html, h2, text)


type alias Model =
    {}


type Msg
    = NoOp


initialModel : Model
initialModel =
    {}


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none


view : Model -> Html Msg
view model =
    h2 [] [ text "Elm application here :)" ]
