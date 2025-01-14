import { Currency } from "../model";
import { AuthContextState } from "../views/pages/app/authenticate/AuthContext";
import { SetUserPreferredCurrencyBody, SetUserPreferredCurrencyParams, SetUserPreferredCurrencyQuery } from "../dtos";
import { getBackendAPI } from "../services";
import { currencyCookie } from "../cookies";

export const PreferredCurrency = {
  backendAPI: getBackendAPI(),

  get(auth: AuthContextState): Currency {
    if (auth.authInfo?.user?.preferredCurrency) {
      return auth.authInfo.user.preferredCurrency;
    } else {
      return currencyCookie.get();
    }
  },

  set(auth: AuthContextState, currency: Currency): void {
    if (auth.authInfo?.user) {
      const params: SetUserPreferredCurrencyParams = {
        currency: currency,
      };
      const body: SetUserPreferredCurrencyBody = {};
      const query: SetUserPreferredCurrencyQuery = {};

      this.backendAPI.setUserPreferredCurrency(params, body, query).then(() => {
        window.location.reload();
      });
    } else {
      currencyCookie.set(currency);
      window.location.reload();
    }
  },
};
