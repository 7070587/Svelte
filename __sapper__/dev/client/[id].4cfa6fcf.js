import { S as SvelteComponentDev, b as init, s as safe_not_equal, d as dispatch_dev, x as globals, v as validate_slots, y as createEventDispatcher, O as onDestroy, e as element, p as space, z as text, A as create_component, f as claim_element, g as children, h as detach_dev, q as claim_space, B as claim_text, C as claim_component, j as attr_dev, k as add_location, l as insert_dev, r as append_dev, D as mount_component, E as set_data_dev, t as transition_in, o as transition_out, F as destroy_component, L as bubble } from './client.003f66fd.js';
import { B as Button, m as meetupsStore } from './Button.4b269672.js';

/* src\routes\[id].svelte generated by Svelte v3.35.0 */

const { Error: Error_1, console: console_1 } = globals;
const file = "src\\routes\\[id].svelte";

// (56:8) <Button button={buttonALink} on:click>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Contact");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Contact");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(56:8) <Button button={buttonALink} on:click>",
		ctx
	});

	return block;
}

// (57:8) <Button button={buttonCancel} on:click={closeDetail}>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Close");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Close");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(57:8) <Button button={buttonCancel} on:click={closeDetail}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let section;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t0;
	let div1;
	let h1;
	let t1_value = /*selectedMeetup*/ ctx[0].subTitle + "";
	let t1;
	let t2;
	let h2;
	let t3_value = /*selectedMeetup*/ ctx[0].title + "";
	let t3;
	let t4;
	let t5_value = /*selectedMeetup*/ ctx[0].address + "";
	let t5;
	let t6;
	let p;
	let t7_value = /*selectedMeetup*/ ctx[0].description + "";
	let t7;
	let t8;
	let button0;
	let t9;
	let button1;
	let current;

	button0 = new Button({
			props: {
				button: /*buttonALink*/ ctx[2],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*click_handler*/ ctx[5]);

	button1 = new Button({
			props: {
				button: /*buttonCancel*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*closeDetail*/ ctx[3]);

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			img = element("img");
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = text(" - ");
			t5 = text(t5_value);
			t6 = space();
			p = element("p");
			t7 = text(t7_value);
			t8 = space();
			create_component(button0.$$.fragment);
			t9 = space();
			create_component(button1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t0 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, t1_value);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			t4 = claim_text(h2_nodes, " - ");
			t5 = claim_text(h2_nodes, t5_value);
			h2_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, t7_value);
			p_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			claim_component(button0.$$.fragment, div1_nodes);
			t9 = claim_space(div1_nodes);
			claim_component(button1.$$.fragment, div1_nodes);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img.src !== (img_src_value = /*selectedMeetup*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*selectedMeetup*/ ctx[0].title);
			attr_dev(img, "class", "svelte-1ukb7kl");
			add_location(img, file, 48, 8, 1301);
			attr_dev(div0, "class", "image svelte-1ukb7kl");
			add_location(div0, file, 47, 4, 1272);
			attr_dev(h1, "class", "svelte-1ukb7kl");
			add_location(h1, file, 52, 8, 1416);
			attr_dev(h2, "class", "svelte-1ukb7kl");
			add_location(h2, file, 53, 8, 1460);
			attr_dev(p, "class", "svelte-1ukb7kl");
			add_location(p, file, 54, 8, 1528);
			attr_dev(div1, "class", "content svelte-1ukb7kl");
			add_location(div1, file, 51, 4, 1385);
			attr_dev(section, "class", "svelte-1ukb7kl");
			add_location(section, file, 46, 0, 1257);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, img);
			append_dev(section, t0);
			append_dev(section, div1);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, h2);
			append_dev(h2, t3);
			append_dev(h2, t4);
			append_dev(h2, t5);
			append_dev(div1, t6);
			append_dev(div1, p);
			append_dev(p, t7);
			append_dev(div1, t8);
			mount_component(button0, div1, null);
			append_dev(div1, t9);
			mount_component(button1, div1, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*selectedMeetup*/ 1 && img.src !== (img_src_value = /*selectedMeetup*/ ctx[0].imageUrl)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*selectedMeetup*/ 1 && img_alt_value !== (img_alt_value = /*selectedMeetup*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*selectedMeetup*/ 1) && t1_value !== (t1_value = /*selectedMeetup*/ ctx[0].subTitle + "")) set_data_dev(t1, t1_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t3_value !== (t3_value = /*selectedMeetup*/ ctx[0].title + "")) set_data_dev(t3, t3_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t5_value !== (t5_value = /*selectedMeetup*/ ctx[0].address + "")) set_data_dev(t5, t5_value);
			if ((!current || dirty & /*selectedMeetup*/ 1) && t7_value !== (t7_value = /*selectedMeetup*/ ctx[0].description + "")) set_data_dev(t7, t7_value);
			const button0_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(button0);
			destroy_component(button1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}
let errorMessage = "";

function preload(page) {
	// console.log('page => ', page);
	const meetupId = page.param.id;

	return this.fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${meetupId}.json`).then(res => {
		if (!res.ok) {
			throw new Error("Fetching meetups failed, please try again later!");
		}

		return res.json();
	}).then(meetupData => {
		return { meetupData };
	}).catch(err => {
		console.error(err);
		this.error(500, "Could not fetch meetups");
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bidu5D", slots, []);
	const dispatch = createEventDispatcher();
	let { id } = $$props;
	let selectedMeetup;

	const unsubscribe = meetupsStore.subscribe(items => {
		$$invalidate(0, selectedMeetup = items.find(x => x.id === id));
	});

	let buttonCancel = { mode: "outline" };

	let buttonALink = {
		href: `mailto:${selectedMeetup.contactEmail}`
	};

	function closeDetail() {
		dispatch("close");
	}

	onDestroy(() => {
		unsubscribe();
	});

	const writable_props = ["id"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("id" in $$props) $$invalidate(4, id = $$props.id);
	};

	$$self.$capture_state = () => ({
		id,
		errorMessage,
		preload,
		onDestroy,
		createEventDispatcher,
		meetups: meetupsStore,
		Button,
		dispatch,
		id,
		selectedMeetup,
		unsubscribe,
		buttonCancel,
		buttonALink,
		closeDetail
	});

	$$self.$inject_state = $$props => {
		if ("id" in $$props) $$invalidate(4, id = $$props.id);
		if ("selectedMeetup" in $$props) $$invalidate(0, selectedMeetup = $$props.selectedMeetup);
		if ("buttonCancel" in $$props) $$invalidate(1, buttonCancel = $$props.buttonCancel);
		if ("buttonALink" in $$props) $$invalidate(2, buttonALink = $$props.buttonALink);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selectedMeetup, buttonCancel, buttonALink, closeDetail, id, click_handler];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { id: 4 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*id*/ ctx[4] === undefined && !("id" in props)) {
			console_1.warn("<U5Bidu5D> was created without expected prop 'id'");
		}
	}

	get id() {
		throw new Error_1("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error_1("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS40Y2ZhNmZjZi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9baWRdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uL21vZGFscyc7XHJcblxyXG4gICAgbGV0IGlkOiBzdHJpbmc7XHJcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcHJlbG9hZChwYWdlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGFnZSA9PiAnLCBwYWdlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbWVldHVwSWQ6IHN0cmluZyA9IHBhZ2UucGFyYW0uaWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKGBodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy8ke21lZXR1cElkfS5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZldGNoaW5nIG1lZXR1cHMgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChtZWV0dXBEYXRhOiBJTWVldHVwLklNZWV0dXBJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZWV0dXBEYXRhOiBtZWV0dXBEYXRhIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKDUwMCwgJ0NvdWxkIG5vdCBmZXRjaCBtZWV0dXBzJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBvbkRlc3Ryb3ksIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XHJcblxyXG4gICAgaW1wb3J0IG1lZXR1cHMgZnJvbSAnLi4vc3RvcmVzL21lZXR1cCc7XHJcblxyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1VJL0J1dHRvbi5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBleHBvcnQgbGV0IGlkOiBzdHJpbmc7XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkTWVldHVwOiBJTWVldHVwLklNZWV0dXBJdGVtO1xyXG5cclxuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gbWVldHVwcy5zdWJzY3JpYmUoKGl0ZW1zKSA9PiB7XHJcbiAgICAgICAgc2VsZWN0ZWRNZWV0dXAgPSBpdGVtcy5maW5kKCh4KSA9PiB4LmlkID09PSBpZCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQ2FuY2VsOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgbW9kZTogJ291dGxpbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQUxpbms6IElNZWV0dXAuSUJ1dHRvbiA9IHtcclxuICAgICAgICBocmVmOiBgbWFpbHRvOiR7c2VsZWN0ZWRNZWV0dXAuY29udGFjdEVtYWlsfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlRGV0YWlsKCk6IHZvaWQge1xyXG4gICAgICAgIGRpc3BhdGNoKCdjbG9zZScpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgoKSA9PiB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgIH0pO1xyXG48L3NjcmlwdD5cclxuXHJcbjxzZWN0aW9uPlxyXG4gICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkTWVldHVwLmltYWdlVXJsfSBhbHQ9e3NlbGVjdGVkTWVldHVwLnRpdGxlfSAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aDE+e3NlbGVjdGVkTWVldHVwLnN1YlRpdGxlfTwvaDE+XHJcbiAgICAgICAgPGgyPntzZWxlY3RlZE1lZXR1cC50aXRsZX0gLSB7c2VsZWN0ZWRNZWV0dXAuYWRkcmVzc308L2gyPlxyXG4gICAgICAgIDxwPntzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b249e2J1dHRvbkFMaW5rfSBvbjpjbGljaz5Db250YWN0PC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b249e2J1dHRvbkNhbmNlbH0gb246Y2xpY2s9e2Nsb3NlRGV0YWlsfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuXHJcbjxzdHlsZT5cclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2U3ZTdlNztcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNmI2YjZiO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBb0VhLEdBQWMsSUFBQyxRQUFROzs7O21DQUN2QixHQUFjLElBQUMsS0FBSzs7O21DQUFLLEdBQWMsSUFBQyxPQUFPOzs7O21DQUNoRCxHQUFjLElBQUMsV0FBVzs7Ozs7Ozs7Ozs0QkFDZCxHQUFXOzs7Ozs7Ozs7Ozs2QkFDWCxHQUFZOzs7Ozs7O3NDQUFZLEdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFSekMsR0FBYyxJQUFDLFFBQVE7MkRBQU8sR0FBYyxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttR0FBbEQsR0FBYyxJQUFDLFFBQVE7Ozs7eUdBQU8sR0FBYyxJQUFDLEtBQUs7Ozs7aUdBSXZELEdBQWMsSUFBQyxRQUFRO2lHQUN2QixHQUFjLElBQUMsS0FBSztpR0FBSyxHQUFjLElBQUMsT0FBTztpR0FDaEQsR0FBYyxJQUFDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBbEU5QixZQUFZLEdBQVcsRUFBRTs7U0FFYixPQUFPLENBQUMsSUFBSTs7T0FHbEIsUUFBUSxHQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs7UUFFL0IsSUFBSSxDQUFDLEtBQUssNkRBQTZELFFBQVEsU0FDakYsSUFBSSxDQUFFLEdBQUc7T0FDRCxHQUFHLENBQUMsRUFBRTthQUNHLEtBQUssQ0FBQyxrREFBa0Q7OztTQUUvRCxHQUFHLENBQUMsSUFBSTtJQUVsQixJQUFJLENBQUUsVUFBK0I7V0FDYixVQUFVO0lBRWxDLEtBQUssQ0FBRSxHQUFHO0VBQ1AsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHO0VBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLHlCQUF5Qjs7Ozs7OztPQVkvQyxRQUFRLEdBQXlDLHFCQUFxQjtPQUVqRSxFQUFVO0tBRWpCLGNBQW1DOztPQUVqQyxXQUFXLEdBQUdBLFlBQU8sQ0FBQyxTQUFTLENBQUUsS0FBSztrQkFDeEMsY0FBYyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUUsQ0FBQyxJQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRTs7O0tBRzlDLFlBQVksS0FDWixJQUFJLEVBQUUsU0FBUzs7S0FHZixXQUFXO0VBQ1gsSUFBSSxZQUFZLGNBQWMsQ0FBQyxZQUFZOzs7VUFHdEMsV0FBVztFQUNoQixRQUFRLENBQUMsT0FBTzs7O0NBR3BCLFNBQVM7RUFDTCxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
