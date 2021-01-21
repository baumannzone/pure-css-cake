import { mount } from "@vue/test-utils";
import App from "@/App.vue";
import CssCake from "@/components/CssCake.vue";

describe("App.vue", () => {
  it("render Cake component", () => {
    const wrapper = mount(App, {});
    expect(wrapper.getComponent(CssCake));
  });
});
