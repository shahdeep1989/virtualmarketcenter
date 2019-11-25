import "./index.scss";
import {getApi, ApiInterface} from "@navvis/indoorviewer";

class TestApp
{
	public ivApi: ApiInterface;

	constructor()
	{
		getApi("https://nvdev-0.iv.navvis.com/")
			.then((iv: ApiInterface) => {
				this.ivApi = iv;
				// Code added here will execute after IndoorViewer is completely loaded.
			});
	}
}

(<any>window).TestApp = new TestApp();
