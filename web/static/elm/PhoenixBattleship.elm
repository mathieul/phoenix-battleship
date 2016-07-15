module PhoenixBattleship exposing (..)

import Html.App as Html
import App exposing (initialModel, update, subscriptions, view)


main : Program Never
main =
    Html.program
        { init = ( initialModel, Cmd.none )
        , update = update
        , subscriptions = subscriptions
        , view = view
        }
