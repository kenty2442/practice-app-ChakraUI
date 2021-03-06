import { memo, VFC } from "react";
import { Switch, Route } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { NotFound } from "../components/pages/NotFound";
import { HeaderLayout } from "../components/templates/HeaderLayout";
import { LoginUserProvider } from "../providers/LoginUserProvider";
import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <LoginUserProvider>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route
                    path="/home"
                    render={({ match: { url } }) => (
                        <Switch >
                            {homeRoutes.map((route) => (
                                <Route
                                    key={route.path}
                                    exact={route.exact}
                                    path={`${url}${route.path}`}
                                >
                                    <HeaderLayout>{route.children}</HeaderLayout>
                                </Route>
                            ))}
                        </Switch>
                    )}
                />
            </LoginUserProvider>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    )
})