export class MyWidget {
	activate(model) {
		Object.assign(this, model);
	}

	cancel() {
		setTimeout(() => this.metadata.isVisible = false, 0);
	}
}