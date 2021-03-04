import { S as SvelteComponentDev, b as init, s as safe_not_equal, d as dispatch_dev, y as globals, v as validate_slots, z as createEventDispatcher, P as onDestroy, e as element, p as space, A as text, B as create_component, f as claim_element, g as children, h as detach_dev, q as claim_space, C as claim_text, D as claim_component, j as attr_dev, k as add_location, l as insert_dev, r as append_dev, E as mount_component, F as set_data_dev, t as transition_in, o as transition_out, G as destroy_component, M as bubble } from './client.095e9def.js';
import { B as Button } from './Button.802e58aa.js';

/* src\routes\[id].svelte generated by Svelte v3.35.0 */

const { Error: Error_1, console: console_1 } = globals;
const file = "src\\routes\\[id].svelte";

// (54:8) <Button button={buttonALink} on:click>
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
		source: "(54:8) <Button button={buttonALink} on:click>",
		ctx
	});

	return block;
}

// (55:8) <Button button={buttonCancel} on:click={closeDetail}>
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
		source: "(55:8) <Button button={buttonCancel} on:click={closeDetail}>",
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
	let t1_value = /*meetupData*/ ctx[0].subTitle + "";
	let t1;
	let t2;
	let h2;
	let t3_value = /*meetupData*/ ctx[0].title + "";
	let t3;
	let t4;
	let t5_value = /*meetupData*/ ctx[0].address + "";
	let t5;
	let t6;
	let p;
	let t7_value = /*meetupData*/ ctx[0].description + "";
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

	button0.$on("click", /*click_handler*/ ctx[4]);

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
			if (img.src !== (img_src_value = /*meetupData*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*meetupData*/ ctx[0].title);
			attr_dev(img, "class", "svelte-1ukb7kl");
			add_location(img, file, 46, 8, 1303);
			attr_dev(div0, "class", "image svelte-1ukb7kl");
			add_location(div0, file, 45, 4, 1274);
			attr_dev(h1, "class", "svelte-1ukb7kl");
			add_location(h1, file, 50, 8, 1410);
			attr_dev(h2, "class", "svelte-1ukb7kl");
			add_location(h2, file, 51, 8, 1450);
			attr_dev(p, "class", "svelte-1ukb7kl");
			add_location(p, file, 52, 8, 1510);
			attr_dev(div1, "class", "content svelte-1ukb7kl");
			add_location(div1, file, 49, 4, 1379);
			attr_dev(section, "class", "svelte-1ukb7kl");
			add_location(section, file, 44, 0, 1259);
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
			if (!current || dirty & /*meetupData*/ 1 && img.src !== (img_src_value = /*meetupData*/ ctx[0].imageUrl)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*meetupData*/ 1 && img_alt_value !== (img_alt_value = /*meetupData*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*meetupData*/ 1) && t1_value !== (t1_value = /*meetupData*/ ctx[0].subTitle + "")) set_data_dev(t1, t1_value);
			if ((!current || dirty & /*meetupData*/ 1) && t3_value !== (t3_value = /*meetupData*/ ctx[0].title + "")) set_data_dev(t3, t3_value);
			if ((!current || dirty & /*meetupData*/ 1) && t5_value !== (t5_value = /*meetupData*/ ctx[0].address + "")) set_data_dev(t5, t5_value);
			if ((!current || dirty & /*meetupData*/ 1) && t7_value !== (t7_value = /*meetupData*/ ctx[0].description + "")) set_data_dev(t7, t7_value);
			const button0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			const button1_changes = {};

			if (dirty & /*$$scope*/ 64) {
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



function preload(page) {
	// console.log('page => ', page);
	const meetupId = page.params.id;

	return this.fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${meetupId}.json`).then(res => {
		if (!res.ok) {
			throw new Error("Fetching meetups failed, please try again later!");
		}

		return res.json();
	}).then(meetupData => {
		meetupData.id = meetupId;
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
	let { meetupData } = $$props;

	// let selectedMeetup: IMeetup.IMeetupItem;
	// const unsubscribe = meetups.subscribe((items) => {
	//     selectedMeetup = items.find((x) => x.id === id);
	// });
	let buttonCancel = { href: `/` };

	let buttonALink = {
		href: `mailto:${meetupData.contactEmail}`
	};

	function closeDetail() {
		dispatch("close");
	}

	const writable_props = ["meetupData"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<U5Bidu5D> was created with unknown prop '${key}'`);
	});

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("meetupData" in $$props) $$invalidate(0, meetupData = $$props.meetupData);
	};

	$$self.$capture_state = () => ({
		preload,
		onDestroy,
		createEventDispatcher,
		Button,
		dispatch,
		meetupData,
		buttonCancel,
		buttonALink,
		closeDetail
	});

	$$self.$inject_state = $$props => {
		if ("meetupData" in $$props) $$invalidate(0, meetupData = $$props.meetupData);
		if ("buttonCancel" in $$props) $$invalidate(1, buttonCancel = $$props.buttonCancel);
		if ("buttonALink" in $$props) $$invalidate(2, buttonALink = $$props.buttonALink);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [meetupData, buttonCancel, buttonALink, closeDetail, click_handler];
}

class U5Bidu5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { meetupData: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bidu5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*meetupData*/ ctx[0] === undefined && !("meetupData" in props)) {
			console_1.warn("<U5Bidu5D> was created without expected prop 'meetupData'");
		}
	}

	get meetupData() {
		throw new Error_1("<U5Bidu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set meetupData(value) {
		throw new Error_1("<U5Bidu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bidu5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW2lkXS42MDI5ZjYxYi5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9baWRdLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uL21vZGFscyc7XHJcblxyXG4gICAgaW50ZXJmYWNlIElQYWdlIHtcclxuICAgICAgICBob3N0OiBzdHJpbmc7XHJcbiAgICAgICAgcGF0aDogc3RyaW5nO1xyXG4gICAgICAgIHF1ZXJ5OiBhbnk7XHJcbiAgICAgICAgcGFyYW1zOiBhbnk7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZTogSVBhZ2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYWdlID0+ICcsIHBhZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBtZWV0dXBJZDogc3RyaW5nID0gcGFnZS5wYXJhbXMuaWQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKGBodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy8ke21lZXR1cElkfS5qc29uYClcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZldGNoaW5nIG1lZXR1cHMgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChtZWV0dXBEYXRhOiBJTWVldHVwLklNZWV0dXBJdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZWV0dXBEYXRhLmlkID0gbWVldHVwSWQ7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBtZWV0dXBEYXRhOiBtZWV0dXBEYXRhIH07XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVycm9yKDUwMCwgJ0NvdWxkIG5vdCBmZXRjaCBtZWV0dXBzJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBvbkRlc3Ryb3ksIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XHJcblxyXG4gICAgLy8gaW1wb3J0IG1lZXR1cHMgZnJvbSAnLi4vc3RvcmVzL21lZXR1cCc7XHJcblxyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1VJL0J1dHRvbi5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG1lZXR1cERhdGE6IElNZWV0dXAuSU1lZXR1cEl0ZW07XHJcblxyXG4gICAgLy8gbGV0IHNlbGVjdGVkTWVldHVwOiBJTWVldHVwLklNZWV0dXBJdGVtO1xyXG5cclxuICAgIC8vIGNvbnN0IHVuc3Vic2NyaWJlID0gbWVldHVwcy5zdWJzY3JpYmUoKGl0ZW1zKSA9PiB7XHJcbiAgICAvLyAgICAgc2VsZWN0ZWRNZWV0dXAgPSBpdGVtcy5maW5kKCh4KSA9PiB4LmlkID09PSBpZCk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQ2FuY2VsOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgaHJlZjogYC9gLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQUxpbms6IElNZWV0dXAuSUJ1dHRvbiA9IHtcclxuICAgICAgICBocmVmOiBgbWFpbHRvOiR7bWVldHVwRGF0YS5jb250YWN0RW1haWx9YCxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VEZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgZGlzcGF0Y2goJ2Nsb3NlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb25EZXN0cm95KCgpID0+IHtcclxuICAgIC8vICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgLy8gfSk7XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNlY3Rpb24+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIHNyYz17bWVldHVwRGF0YS5pbWFnZVVybH0gYWx0PXttZWV0dXBEYXRhLnRpdGxlfSAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8aDE+e21lZXR1cERhdGEuc3ViVGl0bGV9PC9oMT5cclxuICAgICAgICA8aDI+e21lZXR1cERhdGEudGl0bGV9IC0ge21lZXR1cERhdGEuYWRkcmVzc308L2gyPlxyXG4gICAgICAgIDxwPnttZWV0dXBEYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uIGJ1dHRvbj17YnV0dG9uQUxpbmt9IG9uOmNsaWNrPkNvbnRhY3Q8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uIGJ1dHRvbj17YnV0dG9uQ2FuY2VsfSBvbjpjbGljaz17Y2xvc2VEZXRhaWx9PkNsb3NlPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90byBTbGFiJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgY29sb3I6ICM2YjZiNmI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkF5RWEsR0FBVSxJQUFDLFFBQVE7Ozs7K0JBQ25CLEdBQVUsSUFBQyxLQUFLOzs7K0JBQUssR0FBVSxJQUFDLE9BQU87Ozs7K0JBQ3hDLEdBQVUsSUFBQyxXQUFXOzs7Ozs7Ozs7OzRCQUNWLEdBQVc7Ozs7Ozs7Ozs7OzZCQUNYLEdBQVk7Ozs7Ozs7c0NBQVksR0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21EQVJ6QyxHQUFVLElBQUMsUUFBUTt1REFBTyxHQUFVLElBQUMsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJGQUExQyxHQUFVLElBQUMsUUFBUTs7OztpR0FBTyxHQUFVLElBQUMsS0FBSzs7Ozt5RkFJL0MsR0FBVSxJQUFDLFFBQVE7eUZBQ25CLEdBQVUsSUFBQyxLQUFLO3lGQUFLLEdBQVUsSUFBQyxPQUFPO3lGQUN4QyxHQUFVLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FqRWQsT0FBTyxDQUFDLElBQVc7O09BR3pCLFFBQVEsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7O1FBRWhDLElBQUksQ0FBQyxLQUFLLDZEQUE2RCxRQUFRLFNBQ2pGLElBQUksQ0FBRSxHQUFHO09BQ0QsR0FBRyxDQUFDLEVBQUU7YUFDRyxLQUFLLENBQUMsa0RBQWtEOzs7U0FFL0QsR0FBRyxDQUFDLElBQUk7SUFFbEIsSUFBSSxDQUFFLFVBQStCO0VBQ2xDLFVBQVUsQ0FBQyxFQUFFLEdBQUcsUUFBUTtXQUNILFVBQVU7SUFFbEMsS0FBSyxDQUFFLEdBQUc7RUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUc7RUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUseUJBQXlCOzs7Ozs7O09BWS9DLFFBQVEsR0FBeUMscUJBQXFCO09BRWpFLFVBQStCOzs7Ozs7S0FRdEMsWUFBWSxLQUNaLElBQUk7O0tBR0osV0FBVztFQUNYLElBQUksWUFBWSxVQUFVLENBQUMsWUFBWTs7O1VBR2xDLFdBQVc7RUFDaEIsUUFBUSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
