import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class ModalStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @observable.shallow modal = {
        open: false,
        body: null // with shallow will only be observable on 1st level (as we will use a complex component here)
    }

    @action openModal = (content: any) => {
        this.modal.open = true;
        this.modal.body = content;
    }

    @action closeModal = () => {
        this.modal.open = false;
        this.modal.body = null;
    }
}