import { i as identity, a as is_function, w as writable, S as SvelteComponentDev, b as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, v as validate_slots, e as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, u as update_slot, t as transition_in, m as add_render_callback, n as create_bidirectional_transition, o as transition_out, p as space, q as claim_space, r as append_dev, x as noop, y as globals, z as createEventDispatcher, A as text, B as create_component, C as claim_text, D as claim_component, E as mount_component, F as set_data_dev, G as destroy_component, H as group_outros, I as check_outros, J as toggle_class, K as listen_dev, L as run_all, M as bubble, N as prop_dev, O as prevent_default, P as onDestroy, Q as onMount, R as empty, T as query_selector_all, U as validate_each_argument, V as validate_each_keys, W as fix_position, X as add_transform, Y as create_animation, Z as update_keyed_each, _ as fix_and_outro_and_destroy_block } from './client.2cec7408.js';
import { B as Button, E as ESelectMeetup, a as EInputType, b as EMeetupStatus } from './Button.acaed15a.js';

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}

function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
    const o = +getComputedStyle(node).opacity;
    return {
        delay,
        duration,
        easing,
        css: t => `opacity: ${t * o}`
    };
}
function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
    };
}
function slide(node, { delay = 0, duration = 400, easing = cubicOut } = {}) {
    const style = getComputedStyle(node);
    const opacity = +style.opacity;
    const height = parseFloat(style.height);
    const padding_top = parseFloat(style.paddingTop);
    const padding_bottom = parseFloat(style.paddingBottom);
    const margin_top = parseFloat(style.marginTop);
    const margin_bottom = parseFloat(style.marginBottom);
    const border_top_width = parseFloat(style.borderTopWidth);
    const border_bottom_width = parseFloat(style.borderBottomWidth);
    return {
        delay,
        duration,
        easing,
        css: t => 'overflow: hidden;' +
            `opacity: ${Math.min(t * 20, 1) * opacity};` +
            `height: ${t * height}px;` +
            `padding-top: ${t * padding_top}px;` +
            `padding-bottom: ${t * padding_bottom}px;` +
            `margin-top: ${t * margin_top}px;` +
            `margin-bottom: ${t * margin_bottom}px;` +
            `border-top-width: ${t * border_top_width}px;` +
            `border-bottom-width: ${t * border_bottom_width}px;`
    };
}
function scale(node, { delay = 0, duration = 400, easing = cubicOut, start = 0, opacity = 0 } = {}) {
    const style = getComputedStyle(node);
    const target_opacity = +style.opacity;
    const transform = style.transform === 'none' ? '' : style.transform;
    const sd = 1 - start;
    const od = target_opacity * (1 - opacity);
    return {
        delay,
        duration,
        easing,
        css: (_t, u) => `
			transform: ${transform} scale(${1 - (sd * u)});
			opacity: ${target_opacity - (od * u)}
		`
    };
}

function flip(node, animation, params = {}) {
    const style = getComputedStyle(node);
    const transform = style.transform === 'none' ? '' : style.transform;
    const scaleX = animation.from.width / node.clientWidth;
    const scaleY = animation.from.height / node.clientHeight;
    const dx = (animation.from.left - animation.to.left) / scaleX;
    const dy = (animation.from.top - animation.to.top) / scaleY;
    const d = Math.sqrt(dx * dx + dy * dy);
    const { delay = 0, duration = (d) => Math.sqrt(d) * 120, easing = cubicOut } = params;
    return {
        delay,
        duration: is_function(duration) ? duration(d) : duration,
        easing,
        css: (_t, u) => `transform: ${transform} translate(${u * dx}px, ${u * dy}px);`
    };
}

var ServiceGenerate;
(function (ServiceGenerate) {
    /**
     * @param {number} [length=8]
     * @return {*}  {string}
     */
    function randomId(length = 8) {
        if (length < 6) {
            length = 6;
        }
        else if (length > 16) {
            length = 16;
        }
        const passwordArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz', '1234567890', '!@#$%&*()'];
        let password = [];
        let n = 0;
        for (let i = 0; i < length; i++) {
            // If password length less than 9, all value random
            if (password.length < length - 4) {
                // Get random passwordArray index
                let arrayRandom = Math.floor(Math.random() * 4);
                // Get password array value
                let passwordItem = passwordArray[arrayRandom];
                // Get password array value random index
                // Get random real value
                let item = passwordItem[Math.floor(Math.random() * passwordItem.length)];
                password.push(item);
            }
            else {
                // If password large then 9, lastest 4 password will push in according to the random password index
                // Get the array values sequentially
                let newItem = passwordArray[n];
                let lastItem = newItem[Math.floor(Math.random() * newItem.length)];
                // Get array splice index
                let spliceIndex = Math.floor(Math.random() * password.length);
                password.splice(spliceIndex, 0, lastItem);
                n++;
            }
        }
        return password.join('');
    }
    ServiceGenerate.randomId = randomId;
})(ServiceGenerate || (ServiceGenerate = {}));

var ServiceValidation;
(function (ServiceValidation) {
    function isEmpty(value) {
        return value.toString().trim().length === 0;
    }
    ServiceValidation.isEmpty = isEmpty;
    function isEmail(value) {
        const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
        return emailRegex.test(value);
    }
    ServiceValidation.isEmail = isEmail;
    function isImage(value) {
        const imageRegex = /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/;
        return imageRegex.test(value);
    }
    ServiceValidation.isImage = isImage;
})(ServiceValidation || (ServiceValidation = {}));

const meetups = writable([
// {
//     id: ServiceGenerate.randomId(),
//     title: 'svelte_title',
//     subTitle: 'svelte_subTitle',
//     description:
//         'svelte_description svelte_description svelte_description svelte_description svelte_description svelte_description svelte_description svelte_description svelte_description svelte_description ',
//     imageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/48/chicago-690364_960_720.jpg',
//     address: 'svelte_address',
//     contactEmail: 'svelte@svelte.svelte',
//     isFavorite: true,
// },
// {
//     id: ServiceGenerate.randomId(),
//     title: 'svelte_title2',
//     subTitle: 'svelte_subTitle2',
//     description: 'svelte_description2',
//     imageUrl: 'https://cdn.pixabay.com/photo/2016/01/19/17/29/earth-1149733_960_720.jpg',
//     address: 'svelte_address2',
//     contactEmail: 'svelte2@svelte.svelte',
//     isFavorite: false,
// },
]);
const meetupsStore = {
    subscribe: meetups.subscribe,
    setMeetup: (meetupsArray) => {
        meetups.set(meetupsArray);
    },
    saveMeetup: (meetupData) => {
        const newMeetup = Object.assign({}, meetupData);
        meetups.update((items) => {
            return [newMeetup, ...items];
        });
    },
    updateMeetup: (id, meetupData) => {
        meetups.update((items) => {
            const meetupIndex = items.findIndex((x) => x.id === id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = meetupData;
            return updatedMeetups;
        });
    },
    deleteMeetup: (id) => {
        meetups.update((items) => {
            return items.filter((x) => x.id !== id);
        });
    },
    toggleFavorite: (meetup) => {
        meetups.update((items) => {
            const updatedMeetup = Object.assign({}, items.find((x) => x.id === meetup.id));
            updatedMeetup.isFavorite = meetup.isFavorite;
            const meetupIndex = items.findIndex((x) => x.id === meetup.id);
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;
            return updatedMeetups;
        });
    },
};

/* src\components\UI\Badge.svelte generated by Svelte v3.35.0 */
const file$7 = "src\\components\\UI\\Badge.svelte";

function create_fragment$7(ctx) {
	let span;
	let span_transition;
	let current;
	const default_slot_template = /*#slots*/ ctx[1].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[0], null);

	const block = {
		c: function create() {
			span = element("span");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", { class: true });
			var span_nodes = children(span);
			if (default_slot) default_slot.l(span_nodes);
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(span, "class", "svelte-9xyts5");
			add_location(span, file$7, 3, 0, 65);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);

			if (default_slot) {
				default_slot.m(span, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 1) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[0], dirty, null, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);

			add_render_callback(() => {
				if (!span_transition) span_transition = create_bidirectional_transition(span, slide, {}, true);
				span_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			if (!span_transition) span_transition = create_bidirectional_transition(span, slide, {}, false);
			span_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
			if (default_slot) default_slot.d(detaching);
			if (detaching && span_transition) span_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$7.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$7($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Badge", slots, ['default']);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Badge> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ slide });
	return [$$scope, slots];
}

class Badge extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$7, create_fragment$7, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Badge",
			options,
			id: create_fragment$7.name
		});
	}
}

/* src\components\UI\Loading.svelte generated by Svelte v3.35.0 */

const file$6 = "src\\components\\UI\\Loading.svelte";

function create_fragment$6(ctx) {
	let div5;
	let div4;
	let div0;
	let t0;
	let div1;
	let t1;
	let div2;
	let t2;
	let div3;

	const block = {
		c: function create() {
			div5 = element("div");
			div4 = element("div");
			div0 = element("div");
			t0 = space();
			div1 = element("div");
			t1 = space();
			div2 = element("div");
			t2 = space();
			div3 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			div4 = claim_element(div5_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			div0 = claim_element(div4_nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(div4_nodes);
			div1 = claim_element(div4_nodes, "DIV", { class: true });
			children(div1).forEach(detach_dev);
			t1 = claim_space(div4_nodes);
			div2 = claim_element(div4_nodes, "DIV", { class: true });
			children(div2).forEach(detach_dev);
			t2 = claim_space(div4_nodes);
			div3 = claim_element(div4_nodes, "DIV", { class: true });
			children(div3).forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "svelte-18ntk94");
			add_location(div0, file$6, 4, 8, 80);
			attr_dev(div1, "class", "svelte-18ntk94");
			add_location(div1, file$6, 5, 8, 97);
			attr_dev(div2, "class", "svelte-18ntk94");
			add_location(div2, file$6, 6, 8, 114);
			attr_dev(div3, "class", "svelte-18ntk94");
			add_location(div3, file$6, 7, 8, 131);
			attr_dev(div4, "class", "lds-ring svelte-18ntk94");
			add_location(div4, file$6, 3, 4, 48);
			attr_dev(div5, "class", "loading svelte-18ntk94");
			add_location(div5, file$6, 2, 0, 21);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div5, anchor);
			append_dev(div5, div4);
			append_dev(div4, div0);
			append_dev(div4, t0);
			append_dev(div4, div1);
			append_dev(div4, t1);
			append_dev(div4, div2);
			append_dev(div4, t2);
			append_dev(div4, div3);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div5);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$6.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$6($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Loading", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Loading> was created with unknown prop '${key}'`);
	});

	return [];
}

class Loading extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$6, create_fragment$6, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Loading",
			options,
			id: create_fragment$6.name
		});
	}
}

/* src\components\Meetups\MeetupItem.svelte generated by Svelte v3.35.0 */

const { Error: Error_1$2, console: console_1$2 } = globals;
const file$5 = "src\\components\\Meetups\\MeetupItem.svelte";

// (60:12) {#if meetup.isFavorite}
function create_if_block_1$2(ctx) {
	let t0_value = /*meetup*/ ctx[0].isFavorite + "";
	let t0;
	let t1;
	let badge;
	let current;

	badge = new Badge({
			props: {
				$$slots: { default: [create_default_slot_3$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t0 = text(t0_value);
			t1 = space();
			create_component(badge.$$.fragment);
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, t0_value);
			t1 = claim_space(nodes);
			claim_component(badge.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			mount_component(badge, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if ((!current || dirty & /*meetup*/ 1) && t0_value !== (t0_value = /*meetup*/ ctx[0].isFavorite + "")) set_data_dev(t0, t0_value);
			const badge_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				badge_changes.$$scope = { dirty, ctx };
			}

			badge.$set(badge_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(badge.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(badge.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			destroy_component(badge, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$2.name,
		type: "if",
		source: "(60:12) {#if meetup.isFavorite}",
		ctx
	});

	return block;
}

// (62:16) <Badge>
function create_default_slot_3$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("❤ Favorite");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "❤ Favorite");
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
		id: create_default_slot_3$1.name,
		type: "slot",
		source: "(62:16) <Badge>",
		ctx
	});

	return block;
}

// (78:8) <Button button={buttonUnfavorite} on:click={editMeetup}>
function create_default_slot_2$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Edit");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Edit");
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
		id: create_default_slot_2$1.name,
		type: "slot",
		source: "(78:8) <Button button={buttonUnfavorite} on:click={editMeetup}>",
		ctx
	});

	return block;
}

// (82:8) {:else}
function create_else_block$2(ctx) {
	let button;
	let current;

	button = new Button({
			props: {
				button: /*meetup*/ ctx[0].isFavorite
				? /*buttonUnfavorite*/ ctx[3]
				: /*buttonFavorite*/ ctx[2],
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*toggleFavorite*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*meetup*/ 1) button_changes.button = /*meetup*/ ctx[0].isFavorite
			? /*buttonUnfavorite*/ ctx[3]
			: /*buttonFavorite*/ ctx[2];

			if (dirty & /*$$scope, meetup*/ 1025) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$2.name,
		type: "else",
		source: "(82:8) {:else}",
		ctx
	});

	return block;
}

// (80:8) {#if isLoading}
function create_if_block$3(ctx) {
	let span;
	let t;

	const block = {
		c: function create() {
			span = element("span");
			t = text("Changing...   ");
			this.h();
		},
		l: function claim(nodes) {
			span = claim_element(nodes, "SPAN", {});
			var span_nodes = children(span);
			t = claim_text(span_nodes, "Changing...   ");
			span_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(span, file$5, 80, 12, 2877);
		},
		m: function mount(target, anchor) {
			insert_dev(target, span, anchor);
			append_dev(span, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(span);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$3.name,
		type: "if",
		source: "(80:8) {#if isLoading}",
		ctx
	});

	return block;
}

// (83:12) <Button button={meetup.isFavorite ? buttonUnfavorite : buttonFavorite} on:click={toggleFavorite}>
function create_default_slot_1$1(ctx) {
	let t_value = (/*meetup*/ ctx[0].isFavorite ? "Unfavorite" : "Favorite") + "";
	let t;

	const block = {
		c: function create() {
			t = text(t_value);
		},
		l: function claim(nodes) {
			t = claim_text(nodes, t_value);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*meetup*/ 1 && t_value !== (t_value = (/*meetup*/ ctx[0].isFavorite ? "Unfavorite" : "Favorite") + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1$1.name,
		type: "slot",
		source: "(83:12) <Button button={meetup.isFavorite ? buttonUnfavorite : buttonFavorite} on:click={toggleFavorite}>",
		ctx
	});

	return block;
}

// (88:8) <Button on:click={showDetail}>
function create_default_slot$3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Show Detail");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Show Detail");
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
		id: create_default_slot$3.name,
		type: "slot",
		source: "(88:8) <Button on:click={showDetail}>",
		ctx
	});

	return block;
}

function create_fragment$5(ctx) {
	let article;
	let header;
	let h10;
	let t0_value = /*meetup*/ ctx[0].title + "";
	let t0;
	let t1;
	let t2;
	let h2;
	let t3_value = /*meetup*/ ctx[0].subTitle + "";
	let t3;
	let t4;
	let h11;
	let t5_value = /*meetup*/ ctx[0].address + "";
	let t5;
	let t6;
	let div0;
	let img;
	let img_src_value;
	let img_alt_value;
	let t7;
	let div1;
	let p;
	let t8_value = /*meetup*/ ctx[0].description + "";
	let t8;
	let t9;
	let footer;
	let button0;
	let t10;
	let current_block_type_index;
	let if_block1;
	let t11;
	let button1;
	let current;
	let if_block0 = /*meetup*/ ctx[0].isFavorite && create_if_block_1$2(ctx);

	button0 = new Button({
			props: {
				button: /*buttonUnfavorite*/ ctx[3],
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*editMeetup*/ ctx[6]);
	const if_block_creators = [create_if_block$3, create_else_block$2];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*isLoading*/ ctx[1]) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	button1 = new Button({
			props: {
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*showDetail*/ ctx[5]);

	const block = {
		c: function create() {
			article = element("article");
			header = element("header");
			h10 = element("h1");
			t0 = text(t0_value);
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			h2 = element("h2");
			t3 = text(t3_value);
			t4 = space();
			h11 = element("h1");
			t5 = text(t5_value);
			t6 = space();
			div0 = element("div");
			img = element("img");
			t7 = space();
			div1 = element("div");
			p = element("p");
			t8 = text(t8_value);
			t9 = space();
			footer = element("footer");
			create_component(button0.$$.fragment);
			t10 = space();
			if_block1.c();
			t11 = space();
			create_component(button1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			article = claim_element(nodes, "ARTICLE", { class: true });
			var article_nodes = children(article);
			header = claim_element(article_nodes, "HEADER", { class: true });
			var header_nodes = children(header);
			h10 = claim_element(header_nodes, "H1", { class: true });
			var h10_nodes = children(h10);
			t0 = claim_text(h10_nodes, t0_value);
			t1 = claim_space(h10_nodes);
			if (if_block0) if_block0.l(h10_nodes);
			h10_nodes.forEach(detach_dev);
			t2 = claim_space(header_nodes);
			h2 = claim_element(header_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t3 = claim_text(h2_nodes, t3_value);
			h2_nodes.forEach(detach_dev);
			t4 = claim_space(header_nodes);
			h11 = claim_element(header_nodes, "H1", { class: true });
			var h11_nodes = children(h11);
			t5 = claim_text(h11_nodes, t5_value);
			h11_nodes.forEach(detach_dev);
			header_nodes.forEach(detach_dev);
			t6 = claim_space(article_nodes);
			div0 = claim_element(article_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			img = claim_element(div0_nodes, "IMG", { src: true, alt: true, class: true });
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(article_nodes);
			div1 = claim_element(article_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			p = claim_element(div1_nodes, "P", { class: true });
			var p_nodes = children(p);
			t8 = claim_text(p_nodes, t8_value);
			p_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t9 = claim_space(article_nodes);
			footer = claim_element(article_nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			claim_component(button0.$$.fragment, footer_nodes);
			t10 = claim_space(footer_nodes);
			if_block1.l(footer_nodes);
			t11 = claim_space(footer_nodes);
			claim_component(button1.$$.fragment, footer_nodes);
			footer_nodes.forEach(detach_dev);
			article_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h10, "class", "svelte-38nmm0");
			add_location(h10, file$5, 57, 8, 2129);
			attr_dev(h2, "class", "text-overflow-ellipsis text-overflow-ellipsis-1 svelte-38nmm0");
			add_location(h2, file$5, 64, 8, 2322);
			attr_dev(h11, "class", "text-overflow-ellipsis text-overflow-ellipsis-1 svelte-38nmm0");
			add_location(h11, file$5, 65, 8, 2414);
			attr_dev(header, "class", "svelte-38nmm0");
			add_location(header, file$5, 56, 4, 2111);
			if (img.src !== (img_src_value = /*meetup*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*meetup*/ ctx[0].title);
			attr_dev(img, "class", "svelte-38nmm0");
			add_location(img, file$5, 69, 8, 2547);
			attr_dev(div0, "class", "image svelte-38nmm0");
			add_location(div0, file$5, 68, 4, 2518);
			attr_dev(p, "class", "text-overflow-ellipsis text-overflow-ellipsis-2 svelte-38nmm0");
			add_location(p, file$5, 73, 8, 2646);
			attr_dev(div1, "class", "content svelte-38nmm0");
			add_location(div1, file$5, 72, 4, 2615);
			attr_dev(footer, "class", "svelte-38nmm0");
			add_location(footer, file$5, 76, 4, 2749);
			attr_dev(article, "class", "svelte-38nmm0");
			add_location(article, file$5, 55, 0, 2096);
		},
		m: function mount(target, anchor) {
			insert_dev(target, article, anchor);
			append_dev(article, header);
			append_dev(header, h10);
			append_dev(h10, t0);
			append_dev(h10, t1);
			if (if_block0) if_block0.m(h10, null);
			append_dev(header, t2);
			append_dev(header, h2);
			append_dev(h2, t3);
			append_dev(header, t4);
			append_dev(header, h11);
			append_dev(h11, t5);
			append_dev(article, t6);
			append_dev(article, div0);
			append_dev(div0, img);
			append_dev(article, t7);
			append_dev(article, div1);
			append_dev(div1, p);
			append_dev(p, t8);
			append_dev(article, t9);
			append_dev(article, footer);
			mount_component(button0, footer, null);
			append_dev(footer, t10);
			if_blocks[current_block_type_index].m(footer, null);
			append_dev(footer, t11);
			mount_component(button1, footer, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*meetup*/ 1) && t0_value !== (t0_value = /*meetup*/ ctx[0].title + "")) set_data_dev(t0, t0_value);

			if (/*meetup*/ ctx[0].isFavorite) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*meetup*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1$2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(h10, null);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if ((!current || dirty & /*meetup*/ 1) && t3_value !== (t3_value = /*meetup*/ ctx[0].subTitle + "")) set_data_dev(t3, t3_value);
			if ((!current || dirty & /*meetup*/ 1) && t5_value !== (t5_value = /*meetup*/ ctx[0].address + "")) set_data_dev(t5, t5_value);

			if (!current || dirty & /*meetup*/ 1 && img.src !== (img_src_value = /*meetup*/ ctx[0].imageUrl)) {
				attr_dev(img, "src", img_src_value);
			}

			if (!current || dirty & /*meetup*/ 1 && img_alt_value !== (img_alt_value = /*meetup*/ ctx[0].title)) {
				attr_dev(img, "alt", img_alt_value);
			}

			if ((!current || dirty & /*meetup*/ 1) && t8_value !== (t8_value = /*meetup*/ ctx[0].description + "")) set_data_dev(t8, t8_value);
			const button0_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block1 = if_blocks[current_block_type_index];

				if (!if_block1) {
					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block1.c();
				} else {
					if_block1.p(ctx, dirty);
				}

				transition_in(if_block1, 1);
				if_block1.m(footer, t11);
			}

			const button1_changes = {};

			if (dirty & /*$$scope*/ 1024) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(button0.$$.fragment, local);
			transition_in(if_block1);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(button0.$$.fragment, local);
			transition_out(if_block1);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(article);
			if (if_block0) if_block0.d();
			destroy_component(button0);
			if_blocks[current_block_type_index].d();
			destroy_component(button1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$5.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$5($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("MeetupItem", slots, []);

	var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
			? value
			: new P(function (resolve) {
						resolve(value);
					});
		}

		return new (P || (P = Promise))(function (resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch(e) {
						reject(e);
					}
				}

				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch(e) {
						reject(e);
					}
				}

				function step(result) {
					result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
				}

				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
	};

	
	const dispatch = createEventDispatcher();
	let { meetup } = $$props;
	let isLoading = false;
	let buttonALink = { href: `mailto:${meetup.contactEmail}` };
	let buttonFavorite = { mode: "outline", color: "success" };
	let buttonUnfavorite = { mode: "outline" };

	function toggleFavorite() {
		return __awaiter(this, void 0, void 0, function* () {
			$$invalidate(1, isLoading = true);

			// if (meetup.id) delete meetup.id;
			$$invalidate(0, meetup.isFavorite = !meetup.isFavorite, meetup);

			const res = yield fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${meetup.id}.json`, {
				method: "PATCH",
				body: JSON.stringify(meetup),
				headers: { "Content-Type": "application/json" }
			}).catch(err => {
				$$invalidate(1, isLoading = false);
				console.error(err);
			});

			if (!res.ok) throw new Error("An error occured, please try again");
			$$invalidate(1, isLoading = false);
			meetupsStore.toggleFavorite(meetup);
		});
	}

	function showDetail() {
		dispatch("show-detail", meetup.id);
	}

	function editMeetup() {
		dispatch("edit-meetup", meetup.id);
	}

	const writable_props = ["meetup"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$2.warn(`<MeetupItem> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("meetup" in $$props) $$invalidate(0, meetup = $$props.meetup);
	};

	$$self.$capture_state = () => ({
		__awaiter,
		createEventDispatcher,
		meetups: meetupsStore,
		Button,
		Badge,
		Loading,
		dispatch,
		meetup,
		isLoading,
		buttonALink,
		buttonFavorite,
		buttonUnfavorite,
		toggleFavorite,
		showDetail,
		editMeetup
	});

	$$self.$inject_state = $$props => {
		if ("__awaiter" in $$props) __awaiter = $$props.__awaiter;
		if ("meetup" in $$props) $$invalidate(0, meetup = $$props.meetup);
		if ("isLoading" in $$props) $$invalidate(1, isLoading = $$props.isLoading);
		if ("buttonALink" in $$props) buttonALink = $$props.buttonALink;
		if ("buttonFavorite" in $$props) $$invalidate(2, buttonFavorite = $$props.buttonFavorite);
		if ("buttonUnfavorite" in $$props) $$invalidate(3, buttonUnfavorite = $$props.buttonUnfavorite);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		meetup,
		isLoading,
		buttonFavorite,
		buttonUnfavorite,
		toggleFavorite,
		showDetail,
		editMeetup
	];
}

class MeetupItem extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$5, create_fragment$5, safe_not_equal, { meetup: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MeetupItem",
			options,
			id: create_fragment$5.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*meetup*/ ctx[0] === undefined && !("meetup" in props)) {
			console_1$2.warn("<MeetupItem> was created without expected prop 'meetup'");
		}
	}

	get meetup() {
		throw new Error_1$2("<MeetupItem>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set meetup(value) {
		throw new Error_1$2("<MeetupItem>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\Meetups\MeetupFilter.svelte generated by Svelte v3.35.0 */
const file$4 = "src\\components\\Meetups\\MeetupFilter.svelte";

function create_fragment$4(ctx) {
	let div;
	let button0;
	let t0;
	let t1;
	let button1;
	let t2;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			div = element("div");
			button0 = element("button");
			t0 = text("All");
			t1 = space();
			button1 = element("button");
			t2 = text("Favorites");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t0 = claim_text(button0_nodes, "All");
			button0_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t2 = claim_text(button1_nodes, "Favorites");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button0, "class", "svelte-egvt64");
			toggle_class(button0, "active", /*selectedButton*/ ctx[0] === ESelectMeetup.all);
			add_location(button0, file$4, 15, 4, 458);
			attr_dev(button1, "class", "svelte-egvt64");
			toggle_class(button1, "active", /*selectedButton*/ ctx[0] === ESelectMeetup.favorite);
			add_location(button1, file$4, 16, 4, 557);
			attr_dev(div, "class", "svelte-egvt64");
			add_location(div, file$4, 14, 0, 447);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, button0);
			append_dev(button0, t0);
			append_dev(div, t1);
			append_dev(div, button1);
			append_dev(button1, t2);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*selectAll*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*selectFavorites*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*selectedButton, ESelectMeetup*/ 1) {
				toggle_class(button0, "active", /*selectedButton*/ ctx[0] === ESelectMeetup.all);
			}

			if (dirty & /*selectedButton, ESelectMeetup*/ 1) {
				toggle_class(button1, "active", /*selectedButton*/ ctx[0] === ESelectMeetup.favorite);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$4.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$4($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("MeetupFilter", slots, []);
	const dispatch = createEventDispatcher();
	let selectedButton = ESelectMeetup.all;

	function selectAll() {
		$$invalidate(0, selectedButton = ESelectMeetup.all);
		dispatch("select", ESelectMeetup.all);
	}

	function selectFavorites() {
		$$invalidate(0, selectedButton = ESelectMeetup.favorite);
		dispatch("select", ESelectMeetup.favorite);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<MeetupFilter> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({
		createEventDispatcher,
		ESelectMeetup,
		dispatch,
		selectedButton,
		selectAll,
		selectFavorites
	});

	$$self.$inject_state = $$props => {
		if ("selectedButton" in $$props) $$invalidate(0, selectedButton = $$props.selectedButton);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [selectedButton, selectAll, selectFavorites];
}

class MeetupFilter extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$4, create_fragment$4, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "MeetupFilter",
			options,
			id: create_fragment$4.name
		});
	}
}

/* src\components\UI\TextInput.svelte generated by Svelte v3.35.0 */
const file$3 = "src\\components\\UI\\TextInput.svelte";

// (29:4) {:else}
function create_else_block$1(ctx) {
	let input;
	let input_type_value;
	let input_id_value;
	let input_value_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			input = element("input");
			this.h();
		},
		l: function claim(nodes) {
			input = claim_element(nodes, "INPUT", {
				type: true,
				id: true,
				value: true,
				class: true
			});

			this.h();
		},
		h: function hydrate() {
			attr_dev(input, "type", input_type_value = /*textInput*/ ctx[0].type);
			attr_dev(input, "id", input_id_value = /*textInput*/ ctx[0].id);
			input.value = input_value_value = /*textInput*/ ctx[0].value;
			attr_dev(input, "class", "svelte-visp03");
			toggle_class(input, "invalid", !/*textInput*/ ctx[0].valid && /*isFocus*/ ctx[1]);
			add_location(input, file$3, 29, 8, 708);
		},
		m: function mount(target, anchor) {
			insert_dev(target, input, anchor);

			if (!mounted) {
				dispose = [
					listen_dev(input, "input", /*input_handler_1*/ ctx[4], false, false, false),
					listen_dev(input, "blur", /*focusStatus*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*textInput*/ 1 && input_type_value !== (input_type_value = /*textInput*/ ctx[0].type)) {
				attr_dev(input, "type", input_type_value);
			}

			if (dirty & /*textInput*/ 1 && input_id_value !== (input_id_value = /*textInput*/ ctx[0].id)) {
				attr_dev(input, "id", input_id_value);
			}

			if (dirty & /*textInput*/ 1 && input_value_value !== (input_value_value = /*textInput*/ ctx[0].value) && input.value !== input_value_value) {
				prop_dev(input, "value", input_value_value);
			}

			if (dirty & /*textInput, isFocus*/ 3) {
				toggle_class(input, "invalid", !/*textInput*/ ctx[0].valid && /*isFocus*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(input);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block$1.name,
		type: "else",
		source: "(29:4) {:else}",
		ctx
	});

	return block;
}

// (20:4) {#if textInput.type === EInputType.textarea}
function create_if_block_1$1(ctx) {
	let textarea;
	let textarea_rows_value;
	let textarea_id_value;
	let textarea_value_value;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			textarea = element("textarea");
			this.h();
		},
		l: function claim(nodes) {
			textarea = claim_element(nodes, "TEXTAREA", {
				rows: true,
				id: true,
				value: true,
				class: true
			});

			children(textarea).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(textarea, "rows", textarea_rows_value = /*textInput*/ ctx[0].rows);
			attr_dev(textarea, "id", textarea_id_value = /*textInput*/ ctx[0].id);
			textarea.value = textarea_value_value = /*textInput*/ ctx[0].value;
			attr_dev(textarea, "class", "svelte-visp03");
			toggle_class(textarea, "invalid", !/*textInput*/ ctx[0].valid && /*isFocus*/ ctx[1]);
			add_location(textarea, file$3, 20, 8, 447);
		},
		m: function mount(target, anchor) {
			insert_dev(target, textarea, anchor);

			if (!mounted) {
				dispose = [
					listen_dev(textarea, "input", /*input_handler*/ ctx[3], false, false, false),
					listen_dev(textarea, "blur", /*focusStatus*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*textInput*/ 1 && textarea_rows_value !== (textarea_rows_value = /*textInput*/ ctx[0].rows)) {
				attr_dev(textarea, "rows", textarea_rows_value);
			}

			if (dirty & /*textInput*/ 1 && textarea_id_value !== (textarea_id_value = /*textInput*/ ctx[0].id)) {
				attr_dev(textarea, "id", textarea_id_value);
			}

			if (dirty & /*textInput*/ 1 && textarea_value_value !== (textarea_value_value = /*textInput*/ ctx[0].value)) {
				prop_dev(textarea, "value", textarea_value_value);
			}

			if (dirty & /*textInput, isFocus*/ 3) {
				toggle_class(textarea, "invalid", !/*textInput*/ ctx[0].valid && /*isFocus*/ ctx[1]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(textarea);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(20:4) {#if textInput.type === EInputType.textarea}",
		ctx
	});

	return block;
}

// (40:4) {#if textInput.validMessage && !textInput.valid && isFocus}
function create_if_block$2(ctx) {
	let p;
	let t_value = /*textInput*/ ctx[0].validMessage + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "error-message svelte-visp03");
			add_location(p, file$3, 40, 8, 1031);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*textInput*/ 1 && t_value !== (t_value = /*textInput*/ ctx[0].validMessage + "")) set_data_dev(t, t_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$2.name,
		type: "if",
		source: "(40:4) {#if textInput.validMessage && !textInput.valid && isFocus}",
		ctx
	});

	return block;
}

function create_fragment$3(ctx) {
	let div;
	let label;
	let t0_value = /*textInput*/ ctx[0].label + "";
	let t0;
	let label_for_value;
	let t1;
	let t2;

	function select_block_type(ctx, dirty) {
		if (/*textInput*/ ctx[0].type === EInputType.textarea) return create_if_block_1$1;
		return create_else_block$1;
	}

	let current_block_type = select_block_type(ctx);
	let if_block0 = current_block_type(ctx);
	let if_block1 = /*textInput*/ ctx[0].validMessage && !/*textInput*/ ctx[0].valid && /*isFocus*/ ctx[1] && create_if_block$2(ctx);

	const block = {
		c: function create() {
			div = element("div");
			label = element("label");
			t0 = text(t0_value);
			t1 = space();
			if_block0.c();
			t2 = space();
			if (if_block1) if_block1.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			label = claim_element(div_nodes, "LABEL", { for: true, class: true });
			var label_nodes = children(label);
			t0 = claim_text(label_nodes, t0_value);
			label_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			if_block0.l(div_nodes);
			t2 = claim_space(div_nodes);
			if (if_block1) if_block1.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(label, "for", label_for_value = /*textInput*/ ctx[0].id);
			attr_dev(label, "class", "svelte-visp03");
			add_location(label, file$3, 18, 4, 336);
			attr_dev(div, "class", "form-control svelte-visp03");
			add_location(div, file$3, 17, 0, 304);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, label);
			append_dev(label, t0);
			append_dev(div, t1);
			if_block0.m(div, null);
			append_dev(div, t2);
			if (if_block1) if_block1.m(div, null);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*textInput*/ 1 && t0_value !== (t0_value = /*textInput*/ ctx[0].label + "")) set_data_dev(t0, t0_value);

			if (dirty & /*textInput*/ 1 && label_for_value !== (label_for_value = /*textInput*/ ctx[0].id)) {
				attr_dev(label, "for", label_for_value);
			}

			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
				if_block0.p(ctx, dirty);
			} else {
				if_block0.d(1);
				if_block0 = current_block_type(ctx);

				if (if_block0) {
					if_block0.c();
					if_block0.m(div, t2);
				}
			}

			if (/*textInput*/ ctx[0].validMessage && !/*textInput*/ ctx[0].valid && /*isFocus*/ ctx[1]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);
				} else {
					if_block1 = create_if_block$2(ctx);
					if_block1.c();
					if_block1.m(div, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_block0.d();
			if (if_block1) if_block1.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$3.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$3($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("TextInput", slots, []);
	

	let { textInput = {
		id: "",
		label: "",
		type: EInputType.text,
		rows: 3,
		value: "",
		valid: true,
		validMessage: ""
	} } = $$props;

	let isFocus = false;

	function focusStatus() {
		$$invalidate(1, isFocus = true);
	}

	const writable_props = ["textInput"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<TextInput> was created with unknown prop '${key}'`);
	});

	function input_handler(event) {
		bubble($$self, event);
	}

	function input_handler_1(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("textInput" in $$props) $$invalidate(0, textInput = $$props.textInput);
	};

	$$self.$capture_state = () => ({
		EInputType,
		textInput,
		isFocus,
		focusStatus
	});

	$$self.$inject_state = $$props => {
		if ("textInput" in $$props) $$invalidate(0, textInput = $$props.textInput);
		if ("isFocus" in $$props) $$invalidate(1, isFocus = $$props.isFocus);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [textInput, isFocus, focusStatus, input_handler, input_handler_1];
}

class TextInput extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$3, create_fragment$3, safe_not_equal, { textInput: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "TextInput",
			options,
			id: create_fragment$3.name
		});
	}

	get textInput() {
		throw new Error("<TextInput>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set textInput(value) {
		throw new Error("<TextInput>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\UI\Modal.svelte generated by Svelte v3.35.0 */
const file$2 = "src\\components\\UI\\Modal.svelte";
const get_footer_slot_changes = dirty => ({});
const get_footer_slot_context = ctx => ({});

// (24:12) <Button on:click={closeModal}>
function create_default_slot$2(ctx) {
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
		id: create_default_slot$2.name,
		type: "slot",
		source: "(24:12) <Button on:click={closeModal}>",
		ctx
	});

	return block;
}

// (23:28)               
function fallback_block(ctx) {
	let button;
	let current;

	button = new Button({
			props: {
				$$slots: { default: [create_default_slot$2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*closeModal*/ ctx[2]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 16) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: fallback_block.name,
		type: "fallback",
		source: "(23:28)               ",
		ctx
	});

	return block;
}

function create_fragment$2(ctx) {
	let div0;
	let div0_transition;
	let t0;
	let div2;
	let h1;
	let t1;
	let t2;
	let div1;
	let t3;
	let footer;
	let div2_transition;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[4], null);
	const footer_slot_template = /*#slots*/ ctx[3].footer;
	const footer_slot = create_slot(footer_slot_template, ctx, /*$$scope*/ ctx[4], get_footer_slot_context);
	const footer_slot_or_fallback = footer_slot || fallback_block(ctx);

	const block = {
		c: function create() {
			div0 = element("div");
			t0 = space();
			div2 = element("div");
			h1 = element("h1");
			t1 = text(/*modalTitle*/ ctx[0]);
			t2 = space();
			div1 = element("div");
			if (default_slot) default_slot.c();
			t3 = space();
			footer = element("footer");
			if (footer_slot_or_fallback) footer_slot_or_fallback.c();
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			children(div0).forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			h1 = claim_element(div2_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, /*modalTitle*/ ctx[0]);
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t3 = claim_space(div2_nodes);
			footer = claim_element(div2_nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			if (footer_slot_or_fallback) footer_slot_or_fallback.l(footer_nodes);
			footer_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "modal-backdrop svelte-1iw33g6");
			add_location(div0, file$2, 15, 0, 345);
			attr_dev(h1, "class", "svelte-1iw33g6");
			add_location(h1, file$2, 17, 4, 471);
			attr_dev(div1, "class", "content svelte-1iw33g6");
			add_location(div1, file$2, 18, 4, 498);
			attr_dev(footer, "class", "svelte-1iw33g6");
			add_location(footer, file$2, 21, 4, 555);
			attr_dev(div2, "class", "modal svelte-1iw33g6");
			add_location(div2, file$2, 16, 0, 415);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, h1);
			append_dev(h1, t1);
			append_dev(div2, t2);
			append_dev(div2, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			append_dev(div2, t3);
			append_dev(div2, footer);

			if (footer_slot_or_fallback) {
				footer_slot_or_fallback.m(footer, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(div0, "click", /*closeModal*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;
			if (!current || dirty & /*modalTitle*/ 1) set_data_dev(t1, /*modalTitle*/ ctx[0]);

			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[4], dirty, null, null);
				}
			}

			if (footer_slot) {
				if (footer_slot.p && dirty & /*$$scope*/ 16) {
					update_slot(footer_slot, footer_slot_template, ctx, /*$$scope*/ ctx[4], dirty, get_footer_slot_changes, get_footer_slot_context);
				}
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div0_transition) div0_transition = create_bidirectional_transition(div0, fade, {}, true);
				div0_transition.run(1);
			});

			transition_in(default_slot, local);
			transition_in(footer_slot_or_fallback, local);

			add_render_callback(() => {
				if (!div2_transition) div2_transition = create_bidirectional_transition(div2, fly, /*flyTransition*/ ctx[1], true);
				div2_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div0_transition) div0_transition = create_bidirectional_transition(div0, fade, {}, false);
			div0_transition.run(0);
			transition_out(default_slot, local);
			transition_out(footer_slot_or_fallback, local);
			if (!div2_transition) div2_transition = create_bidirectional_transition(div2, fly, /*flyTransition*/ ctx[1], false);
			div2_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching && div0_transition) div0_transition.end();
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			if (default_slot) default_slot.d(detaching);
			if (footer_slot_or_fallback) footer_slot_or_fallback.d(detaching);
			if (detaching && div2_transition) div2_transition.end();
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Modal", slots, ['default','footer']);
	
	const dispatch = createEventDispatcher();
	let { modalTitle } = $$props;
	let flyTransition = { y: 300, duration: 650 };

	function closeModal() {
		dispatch("close-modal");
	}

	const writable_props = ["modalTitle"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Modal> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("modalTitle" in $$props) $$invalidate(0, modalTitle = $$props.modalTitle);
		if ("$$scope" in $$props) $$invalidate(4, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({
		createEventDispatcher,
		fly,
		fade,
		Button,
		dispatch,
		modalTitle,
		flyTransition,
		closeModal
	});

	$$self.$inject_state = $$props => {
		if ("modalTitle" in $$props) $$invalidate(0, modalTitle = $$props.modalTitle);
		if ("flyTransition" in $$props) $$invalidate(1, flyTransition = $$props.flyTransition);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [modalTitle, flyTransition, closeModal, slots, $$scope];
}

class Modal extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, { modalTitle: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Modal",
			options,
			id: create_fragment$2.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*modalTitle*/ ctx[0] === undefined && !("modalTitle" in props)) {
			console.warn("<Modal> was created without expected prop 'modalTitle'");
		}
	}

	get modalTitle() {
		throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set modalTitle(value) {
		throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\components\Meetups\EditMeetup.svelte generated by Svelte v3.35.0 */

const { Error: Error_1$1, console: console_1$1 } = globals;
const file$1 = "src\\components\\Meetups\\EditMeetup.svelte";

// (163:0) <Modals {modalTitle} on:close-modal>
function create_default_slot_3(ctx) {
	let form;
	let textinput0;
	let t0;
	let textinput1;
	let t1;
	let textinput2;
	let t2;
	let textinput3;
	let t3;
	let textinput4;
	let t4;
	let textinput5;
	let current;
	let mounted;
	let dispose;

	textinput0 = new TextInput({
			props: { textInput: /*titleInput*/ ctx[1] },
			$$inline: true
		});

	textinput0.$on("input", /*handleTitle*/ ctx[10]);

	textinput1 = new TextInput({
			props: { textInput: /*subTitleInput*/ ctx[2] },
			$$inline: true
		});

	textinput1.$on("input", /*handleSubTitle*/ ctx[11]);

	textinput2 = new TextInput({
			props: { textInput: /*addressInput*/ ctx[3] },
			$$inline: true
		});

	textinput2.$on("input", /*handleAddress*/ ctx[12]);

	textinput3 = new TextInput({
			props: { textInput: /*imageUrlInput*/ ctx[4] },
			$$inline: true
		});

	textinput3.$on("input", /*handleImageUrl*/ ctx[13]);

	textinput4 = new TextInput({
			props: { textInput: /*contactEmailInput*/ ctx[5] },
			$$inline: true
		});

	textinput4.$on("input", /*handleContactEmail*/ ctx[14]);

	textinput5 = new TextInput({
			props: { textInput: /*descriptionInput*/ ctx[6] },
			$$inline: true
		});

	textinput5.$on("input", /*handleDescription*/ ctx[15]);

	const block = {
		c: function create() {
			form = element("form");
			create_component(textinput0.$$.fragment);
			t0 = space();
			create_component(textinput1.$$.fragment);
			t1 = space();
			create_component(textinput2.$$.fragment);
			t2 = space();
			create_component(textinput3.$$.fragment);
			t3 = space();
			create_component(textinput4.$$.fragment);
			t4 = space();
			create_component(textinput5.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			form = claim_element(nodes, "FORM", { class: true });
			var form_nodes = children(form);
			claim_component(textinput0.$$.fragment, form_nodes);
			t0 = claim_space(form_nodes);
			claim_component(textinput1.$$.fragment, form_nodes);
			t1 = claim_space(form_nodes);
			claim_component(textinput2.$$.fragment, form_nodes);
			t2 = claim_space(form_nodes);
			claim_component(textinput3.$$.fragment, form_nodes);
			t3 = claim_space(form_nodes);
			claim_component(textinput4.$$.fragment, form_nodes);
			t4 = claim_space(form_nodes);
			claim_component(textinput5.$$.fragment, form_nodes);
			form_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(form, "class", "svelte-rzv6h2");
			add_location(form, file$1, 163, 4, 5909);
		},
		m: function mount(target, anchor) {
			insert_dev(target, form, anchor);
			mount_component(textinput0, form, null);
			append_dev(form, t0);
			mount_component(textinput1, form, null);
			append_dev(form, t1);
			mount_component(textinput2, form, null);
			append_dev(form, t2);
			mount_component(textinput3, form, null);
			append_dev(form, t3);
			mount_component(textinput4, form, null);
			append_dev(form, t4);
			mount_component(textinput5, form, null);
			current = true;

			if (!mounted) {
				dispose = listen_dev(form, "submit", prevent_default(/*saveMeetup*/ ctx[16]), false, true, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			const textinput0_changes = {};
			if (dirty & /*titleInput*/ 2) textinput0_changes.textInput = /*titleInput*/ ctx[1];
			textinput0.$set(textinput0_changes);
			const textinput1_changes = {};
			if (dirty & /*subTitleInput*/ 4) textinput1_changes.textInput = /*subTitleInput*/ ctx[2];
			textinput1.$set(textinput1_changes);
			const textinput2_changes = {};
			if (dirty & /*addressInput*/ 8) textinput2_changes.textInput = /*addressInput*/ ctx[3];
			textinput2.$set(textinput2_changes);
			const textinput3_changes = {};
			if (dirty & /*imageUrlInput*/ 16) textinput3_changes.textInput = /*imageUrlInput*/ ctx[4];
			textinput3.$set(textinput3_changes);
			const textinput4_changes = {};
			if (dirty & /*contactEmailInput*/ 32) textinput4_changes.textInput = /*contactEmailInput*/ ctx[5];
			textinput4.$set(textinput4_changes);
			const textinput5_changes = {};
			if (dirty & /*descriptionInput*/ 64) textinput5_changes.textInput = /*descriptionInput*/ ctx[6];
			textinput5.$set(textinput5_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(textinput0.$$.fragment, local);
			transition_in(textinput1.$$.fragment, local);
			transition_in(textinput2.$$.fragment, local);
			transition_in(textinput3.$$.fragment, local);
			transition_in(textinput4.$$.fragment, local);
			transition_in(textinput5.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(textinput0.$$.fragment, local);
			transition_out(textinput1.$$.fragment, local);
			transition_out(textinput2.$$.fragment, local);
			transition_out(textinput3.$$.fragment, local);
			transition_out(textinput4.$$.fragment, local);
			transition_out(textinput5.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(form);
			destroy_component(textinput0);
			destroy_component(textinput1);
			destroy_component(textinput2);
			destroy_component(textinput3);
			destroy_component(textinput4);
			destroy_component(textinput5);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(163:0) <Modals {modalTitle} on:close-modal>",
		ctx
	});

	return block;
}

// (174:8) <Button on:click={saveMeetup} disabled={!isFormValid}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Save");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Save");
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
		id: create_default_slot_2.name,
		type: "slot",
		source: "(174:8) <Button on:click={saveMeetup} disabled={!isFormValid}>",
		ctx
	});

	return block;
}

// (176:8) {#if id}
function create_if_block$1(ctx) {
	let button;
	let current;

	button = new Button({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*deleteMeetup*/ ctx[18]);

	const block = {
		c: function create() {
			create_component(button.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(button.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 8388608) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(button, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block$1.name,
		type: "if",
		source: "(176:8) {#if id}",
		ctx
	});

	return block;
}

// (177:12) <Button on:click={deleteMeetup}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Delete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Delete");
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
		source: "(177:12) <Button on:click={deleteMeetup}>",
		ctx
	});

	return block;
}

// (180:8) <Button button={buttonCancel} on:click={closeModal}>
function create_default_slot$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Cancel");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Cancel");
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
		id: create_default_slot$1.name,
		type: "slot",
		source: "(180:8) <Button button={buttonCancel} on:click={closeModal}>",
		ctx
	});

	return block;
}

// (173:4) 
function create_footer_slot(ctx) {
	let div;
	let button0;
	let t0;
	let t1;
	let button1;
	let current;

	button0 = new Button({
			props: {
				disabled: !/*isFormValid*/ ctx[7],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*saveMeetup*/ ctx[16]);
	let if_block = /*id*/ ctx[0] && create_if_block$1(ctx);

	button1 = new Button({
			props: {
				button: /*buttonCancel*/ ctx[8],
				$$slots: { default: [create_default_slot$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*closeModal*/ ctx[17]);

	const block = {
		c: function create() {
			div = element("div");
			create_component(button0.$$.fragment);
			t0 = space();
			if (if_block) if_block.c();
			t1 = space();
			create_component(button1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, slot: true });
			var div_nodes = children(div);
			claim_component(button0.$$.fragment, div_nodes);
			t0 = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(button1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div, "class", "button");
			attr_dev(div, "slot", "footer");
			add_location(div, file$1, 172, 4, 6430);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(button0, div, null);
			append_dev(div, t0);
			if (if_block) if_block.m(div, null);
			append_dev(div, t1);
			mount_component(button1, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const button0_changes = {};
			if (dirty & /*isFormValid*/ 128) button0_changes.disabled = !/*isFormValid*/ ctx[7];

			if (dirty & /*$$scope*/ 8388608) {
				button0_changes.$$scope = { dirty, ctx };
			}

			button0.$set(button0_changes);

			if (/*id*/ ctx[0]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*id*/ 1) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block$1(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(div, t1);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}

			const button1_changes = {};

			if (dirty & /*$$scope*/ 8388608) {
				button1_changes.$$scope = { dirty, ctx };
			}

			button1.$set(button1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(button0.$$.fragment, local);
			transition_in(if_block);
			transition_in(button1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(button0.$$.fragment, local);
			transition_out(if_block);
			transition_out(button1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(button0);
			if (if_block) if_block.d();
			destroy_component(button1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_footer_slot.name,
		type: "slot",
		source: "(173:4) ",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let modals;
	let current;

	modals = new Modal({
			props: {
				modalTitle: /*modalTitle*/ ctx[9],
				$$slots: {
					footer: [create_footer_slot],
					default: [create_default_slot_3]
				},
				$$scope: { ctx }
			},
			$$inline: true
		});

	modals.$on("close-modal", /*close_modal_handler*/ ctx[20]);

	const block = {
		c: function create() {
			create_component(modals.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(modals.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(modals, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const modals_changes = {};

			if (dirty & /*$$scope, id, isFormValid, descriptionInput, contactEmailInput, imageUrlInput, addressInput, subTitleInput, titleInput*/ 8388863) {
				modals_changes.$$scope = { dirty, ctx };
			}

			modals.$set(modals_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(modals.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(modals.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(modals, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("EditMeetup", slots, []);

	var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
			? value
			: new P(function (resolve) {
						resolve(value);
					});
		}

		return new (P || (P = Promise))(function (resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch(e) {
						reject(e);
					}
				}

				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch(e) {
						reject(e);
					}
				}

				function step(result) {
					result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
				}

				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
	};

	
	const dispatch = createEventDispatcher();

	let meetup = {
		// id: ServiceGenerate.randomId(),
		title: "",
		subTitle: "",
		description: "",
		imageUrl: "",
		address: "",
		contactEmail: "",
		isFavorite: false
	};

	let { id = null } = $$props;

	if (id) {
		const unsubscribe = meetupsStore.subscribe(items => {
			const selectedMeetup = items.find(x => x.id === id);
			$$invalidate(19, meetup = JSON.parse(JSON.stringify(selectedMeetup)));
		});

		unsubscribe();
	}

	const titleInput = {
		id: "title",
		label: "Title",
		value: meetup.title,
		valid: false,
		validMessage: "Please enter a valid title"
	};

	const subTitleInput = {
		id: "subTitle",
		label: "Sub Title",
		value: meetup.subTitle,
		valid: false,
		validMessage: "Please enter a valid sub title"
	};

	const addressInput = {
		id: "address",
		label: "Address",
		value: meetup.address,
		valid: false,
		validMessage: "Please enter a valid address"
	};

	const imageUrlInput = {
		id: "imageUrl",
		label: "Image Url",
		value: meetup.imageUrl,
		valid: false,
		validMessage: "Please enter a valid image url"
	};

	const contactEmailInput = {
		id: "contactEmail",
		label: "Contact Email",
		type: EInputType.email,
		value: meetup.contactEmail,
		valid: false,
		validMessage: "Please enter a valid contact email"
	};

	const descriptionInput = {
		id: "description",
		label: "Description",
		type: EInputType.textarea,
		rows: 3,
		value: meetup.description,
		valid: false,
		validMessage: "Please enter a valid description"
	};

	let buttonCancel = { mode: "outline" };
	let modalTitle = id ? "Edit Meetup" : "Create New Meetup";
	let isFormValid = false;

	function handleTitle(e) {
		$$invalidate(19, meetup.title = e.target.value, meetup);
	}

	function handleSubTitle(e) {
		$$invalidate(19, meetup.subTitle = e.target.value, meetup);
	}

	function handleAddress(e) {
		$$invalidate(19, meetup.address = e.target.value, meetup);
	}

	function handleImageUrl(e) {
		$$invalidate(19, meetup.imageUrl = e.target.value, meetup);
	}

	function handleContactEmail(e) {
		$$invalidate(19, meetup.contactEmail = e.target.value, meetup);
	}

	function handleDescription(e) {
		$$invalidate(19, meetup.description = e.target.value, meetup);
	}

	function saveMeetup() {
		return __awaiter(this, void 0, void 0, function* () {
			// const meetupData: IMeetup.IMeetupItem = JSON.parse(JSON.stringify(meetup));
			const meetupData = meetup;

			// edit mode
			if (id) {
				if (meetupData.id) delete meetupData.id;

				const res = yield fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${id}.json`, {
					method: "PATCH",
					body: JSON.stringify(meetupData),
					headers: { "Content-Type": "application/json" }
				}).catch(err => console.error(err));

				if (!res.ok) throw new Error("An error occured, please try again");
				meetupsStore.updateMeetup(id, meetupData);
			} else {
				const res = yield fetch("https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json", {
					method: "POST",
					body: JSON.stringify(meetupData),
					headers: { "Content-Type": "application/json" }
				}).catch(err => console.error(err));

				if (!res.ok) throw new Error("An error occured, please try again");
				let data = yield res.json();
				meetupData.id = data.name;
				meetupsStore.saveMeetup(meetupData);
				console.log("meetupData => ", meetupData);
			}

			dispatch("save-data", meetup);
		});
	}

	function closeModal() {
		dispatch("close-modal");
	}

	function deleteMeetup() {
		return __awaiter(this, void 0, void 0, function* () {
			const res = yield fetch(`https://svelte-meeup-default-rtdb.firebaseio.com/meetups/${id}.json`, { method: "DELETE" }).catch(err => console.error(err));
			if (!res.ok) throw new Error("An error occured, please try again");
			meetupsStore.deleteMeetup(id);
			dispatch("save-data", meetup);
		});
	}

	const writable_props = ["id"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1$1.warn(`<EditMeetup> was created with unknown prop '${key}'`);
	});

	function close_modal_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("id" in $$props) $$invalidate(0, id = $$props.id);
	};

	$$self.$capture_state = () => ({
		__awaiter,
		createEventDispatcher,
		meetups: meetupsStore,
		EInputType,
		ServiceValidation,
		ServiceGenerate,
		TextInput,
		Button,
		Modals: Modal,
		dispatch,
		meetup,
		id,
		titleInput,
		subTitleInput,
		addressInput,
		imageUrlInput,
		contactEmailInput,
		descriptionInput,
		buttonCancel,
		modalTitle,
		isFormValid,
		handleTitle,
		handleSubTitle,
		handleAddress,
		handleImageUrl,
		handleContactEmail,
		handleDescription,
		saveMeetup,
		closeModal,
		deleteMeetup
	});

	$$self.$inject_state = $$props => {
		if ("__awaiter" in $$props) __awaiter = $$props.__awaiter;
		if ("meetup" in $$props) $$invalidate(19, meetup = $$props.meetup);
		if ("id" in $$props) $$invalidate(0, id = $$props.id);
		if ("buttonCancel" in $$props) $$invalidate(8, buttonCancel = $$props.buttonCancel);
		if ("modalTitle" in $$props) $$invalidate(9, modalTitle = $$props.modalTitle);
		if ("isFormValid" in $$props) $$invalidate(7, isFormValid = $$props.isFormValid);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*meetup*/ 524288) {
			// watch value, if value change update UI
			$$invalidate(1, titleInput.valid = !ServiceValidation.isEmpty(meetup.title), titleInput);
		}

		if ($$self.$$.dirty & /*meetup*/ 524288) {
			$$invalidate(2, subTitleInput.valid = !ServiceValidation.isEmpty(meetup.subTitle), subTitleInput);
		}

		if ($$self.$$.dirty & /*meetup*/ 524288) {
			$$invalidate(3, addressInput.valid = !ServiceValidation.isEmpty(meetup.address), addressInput);
		}

		if ($$self.$$.dirty & /*meetup*/ 524288) {
			$$invalidate(4, imageUrlInput.valid = ServiceValidation.isImage(meetup.imageUrl), imageUrlInput);
		}

		if ($$self.$$.dirty & /*meetup*/ 524288) {
			$$invalidate(5, contactEmailInput.valid = ServiceValidation.isEmail(meetup.contactEmail), contactEmailInput);
		}

		if ($$self.$$.dirty & /*meetup*/ 524288) {
			$$invalidate(6, descriptionInput.valid = !ServiceValidation.isEmpty(meetup.description), descriptionInput);
		}

		if ($$self.$$.dirty & /*titleInput, subTitleInput, addressInput, imageUrlInput, contactEmailInput, descriptionInput*/ 126) {
			$$invalidate(7, isFormValid = titleInput.valid && subTitleInput.valid && addressInput.valid && imageUrlInput.valid && contactEmailInput.valid && descriptionInput.valid);
		}
	};

	return [
		id,
		titleInput,
		subTitleInput,
		addressInput,
		imageUrlInput,
		contactEmailInput,
		descriptionInput,
		isFormValid,
		buttonCancel,
		modalTitle,
		handleTitle,
		handleSubTitle,
		handleAddress,
		handleImageUrl,
		handleContactEmail,
		handleDescription,
		saveMeetup,
		closeModal,
		deleteMeetup,
		meetup,
		close_modal_handler
	];
}

class EditMeetup extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { id: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "EditMeetup",
			options,
			id: create_fragment$1.name
		});
	}

	get id() {
		throw new Error_1$1("<EditMeetup>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set id(value) {
		throw new Error_1$1("<EditMeetup>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src\routes\index.svelte generated by Svelte v3.35.0 */

const { Error: Error_1, Object: Object_1, console: console_1 } = globals;
const file = "src\\routes\\index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[12] = list[i];
	return child_ctx;
}

// (127:0) {#if meetupStatus === EMeetupStatus.edit}
function create_if_block_2(ctx) {
	let editmeetup;
	let current;
	editmeetup = new EditMeetup({ props: { id }, $$inline: true });
	editmeetup.$on("save-data", /*saveMeetup*/ ctx[2]);
	editmeetup.$on("close-modal", /*closeModal*/ ctx[4]);

	const block = {
		c: function create() {
			create_component(editmeetup.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(editmeetup.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(editmeetup, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const editmeetup_changes = {};
			if (dirty & /*id*/ 0) editmeetup_changes.id = id;
			editmeetup.$set(editmeetup_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(editmeetup.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(editmeetup.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(editmeetup, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(127:0) {#if meetupStatus === EMeetupStatus.edit}",
		ctx
	});

	return block;
}

// (133:0) {:else}
function create_else_block(ctx) {
	let section0;
	let meetupfilter;
	let t0;
	let button;
	let t1;
	let t2;
	let section1;
	let each_blocks = [];
	let each_1_lookup = new Map();
	let current;
	meetupfilter = new MeetupFilter({ $$inline: true });
	meetupfilter.$on("select", /*selectMeetup*/ ctx[6]);

	button = new Button({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*clickNewMeetup*/ ctx[3]);
	let if_block = /*filteredMeetups*/ ctx[1].length === 0 && create_if_block_1(ctx);
	let each_value = /*filteredMeetups*/ ctx[1];
	validate_each_argument(each_value);
	const get_key = ctx => /*meetup*/ ctx[12].id;
	validate_each_keys(ctx, each_value, get_each_context, get_key);

	for (let i = 0; i < each_value.length; i += 1) {
		let child_ctx = get_each_context(ctx, each_value, i);
		let key = get_key(child_ctx);
		each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
	}

	const block = {
		c: function create() {
			section0 = element("section");
			create_component(meetupfilter.$$.fragment);
			t0 = space();
			create_component(button.$$.fragment);
			t1 = space();
			if (if_block) if_block.c();
			t2 = space();
			section1 = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			section0 = claim_element(nodes, "SECTION", { class: true });
			var section0_nodes = children(section0);
			claim_component(meetupfilter.$$.fragment, section0_nodes);
			t0 = claim_space(section0_nodes);
			claim_component(button.$$.fragment, section0_nodes);
			section0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			t2 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", { class: true });
			var section1_nodes = children(section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section1_nodes);
			}

			section1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(section0, "class", "meetup-controls svelte-9kdday");
			add_location(section0, file, 133, 4, 4592);
			attr_dev(section1, "class", "fetchedMeetups svelte-9kdday");
			add_location(section1, file, 143, 4, 4904);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section0, anchor);
			mount_component(meetupfilter, section0, null);
			append_dev(section0, t0);
			mount_component(button, section0, null);
			insert_dev(target, t1, anchor);
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, t2, anchor);
			insert_dev(target, section1, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section1, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			const button_changes = {};

			if (dirty & /*$$scope*/ 32768) {
				button_changes.$$scope = { dirty, ctx };
			}

			button.$set(button_changes);

			if (/*filteredMeetups*/ ctx[1].length === 0) {
				if (if_block) ; else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(t2.parentNode, t2);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}

			if (dirty & /*filteredMeetups, editMeetup*/ 34) {
				each_value = /*filteredMeetups*/ ctx[1];
				validate_each_argument(each_value);
				group_outros();
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].r();
				validate_each_keys(ctx, each_value, get_each_context, get_key);
				each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, section1, fix_and_outro_and_destroy_block, create_each_block, null, get_each_context);
				for (let i = 0; i < each_blocks.length; i += 1) each_blocks[i].a();
				check_outros();
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(meetupfilter.$$.fragment, local);
			transition_in(button.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o: function outro(local) {
			transition_out(meetupfilter.$$.fragment, local);
			transition_out(button.$$.fragment, local);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section0);
			destroy_component(meetupfilter);
			destroy_component(button);
			if (detaching) detach_dev(t1);
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(section1);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].d();
			}
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(133:0) {:else}",
		ctx
	});

	return block;
}

// (131:0) {#if isLoadong}
function create_if_block(ctx) {
	let loading;
	let current;
	loading = new Loading({ $$inline: true });

	const block = {
		c: function create() {
			create_component(loading.$$.fragment);
		},
		l: function claim(nodes) {
			claim_component(loading.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			mount_component(loading, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(loading.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(loading.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			destroy_component(loading, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(131:0) {#if isLoadong}",
		ctx
	});

	return block;
}

// (137:8) <Button on:click={clickNewMeetup}>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("New Meetup");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "New Meetup");
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
		source: "(137:8) <Button on:click={clickNewMeetup}>",
		ctx
	});

	return block;
}

// (140:4) {#if filteredMeetups.length === 0}
function create_if_block_1(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("No meetups found, you can start adding some meetups");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "No meetups found, you can start adding some meetups");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "no-meetup svelte-9kdday");
			add_location(p, file, 140, 8, 4809);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(140:4) {#if filteredMeetups.length === 0}",
		ctx
	});

	return block;
}

// (145:8) {#each filteredMeetups as meetup (meetup.id)}
function create_each_block(key_1, ctx) {
	let div;
	let meetupitem;
	let t;
	let div_transition;
	let rect;
	let stop_animation = noop;
	let current;

	meetupitem = new MeetupItem({
			props: { meetup: /*meetup*/ ctx[12] },
			$$inline: true
		});

	meetupitem.$on("edit-meetup", /*editMeetup*/ ctx[5]);

	const block = {
		key: key_1,
		first: null,
		c: function create() {
			div = element("div");
			create_component(meetupitem.$$.fragment);
			t = space();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			claim_component(meetupitem.$$.fragment, div_nodes);
			t = claim_space(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(div, file, 145, 12, 5005);
			this.first = div;
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			mount_component(meetupitem, div, null);
			append_dev(div, t);
			current = true;
		},
		p: function update(new_ctx, dirty) {
			ctx = new_ctx;
			const meetupitem_changes = {};
			if (dirty & /*filteredMeetups*/ 2) meetupitem_changes.meetup = /*meetup*/ ctx[12];
			meetupitem.$set(meetupitem_changes);
		},
		r: function measure() {
			rect = div.getBoundingClientRect();
		},
		f: function fix() {
			fix_position(div);
			stop_animation();
			add_transform(div, rect);
		},
		a: function animate() {
			stop_animation();
			stop_animation = create_animation(div, rect, flip, { duration: 800 });
		},
		i: function intro(local) {
			if (current) return;
			transition_in(meetupitem.$$.fragment, local);

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(div, scale, { duration: 800 }, true);
				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(meetupitem.$$.fragment, local);
			if (!div_transition) div_transition = create_bidirectional_transition(div, scale, { duration: 800 }, false);
			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			destroy_component(meetupitem);
			if (detaching && div_transition) div_transition.end();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(145:8) {#each filteredMeetups as meetup (meetup.id)}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let current_block_type_index;
	let if_block1;
	let if_block1_anchor;
	let current;
	let if_block0 = /*meetupStatus*/ ctx[0] === EMeetupStatus.edit && create_if_block_2(ctx);
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (isLoadong) return 0;
		return 1;
	}

	current_block_type_index = select_block_type();
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			t0 = space();
			if (if_block0) if_block0.c();
			t1 = space();
			if_block1.c();
			if_block1_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1jhqq8d\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			if (if_block0) if_block0.l(nodes);
			t1 = claim_space(nodes);
			if_block1.l(nodes);
			if_block1_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "All Meetups";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			if (if_block0) if_block0.m(target, anchor);
			insert_dev(target, t1, anchor);
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block1_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (/*meetupStatus*/ ctx[0] === EMeetupStatus.edit) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*meetupStatus*/ 1) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(t1.parentNode, t1);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if_block1.p(ctx, dirty);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (if_block0) if_block0.d(detaching);
			if (detaching) detach_dev(t1);
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block1_anchor);
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


let isLoadong = false;
let id;
let errorMessage = "";

function preload(page) {
	// console.log('page => ', page);
	return this.fetch("https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json").then(res => {
		if (!res.ok) {
			throw new Error("Fetching meetups failed, please try again later!");
		}

		return res.json();
	}).then(data => {
		const fetchedMeetups = [];

		for (const key in data) {
			fetchedMeetups.push(Object.assign(Object.assign({}, data[key]), { id: key }));
		}

		return { fetchedMeetups };
	}).catch(err => {
		isLoadong = false;
		errorMessage = err;
		errorMessage = err !== null && err !== void 0 ? err : errorMessage;
		console.error(err);
		this.error(500, "Could not fetch meetups");
	});
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const dispatch = createEventDispatcher();
	let isFavorite = false;
	let meetupStatus;
	let { fetchedMeetups = [] } = $$props;
	let filteredMeetups = [];
	let loadedMeetups = [];
	let unsubscribe;

	// fetch data in client side
	// onMount(
	//     async (): Promise<void> => {
	//         await getAPIData();
	//     },
	// );
	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});

	onMount(() => {
		unsubscribe = meetupsStore.subscribe(item => {
			$$invalidate(9, loadedMeetups = item);
		});

		meetupsStore.setMeetup(fetchedMeetups.reverse());
	});

	// async function getAPIData(): Promise<void> {
	//         isLoadong = true;
	//         unsubscribe = meetups.subscribe((items) => (fetchedMeetups = items));
	//         console.log(' => ', unsubscribe);
	//         let res: any = await fetch('https://svelte-meeup-default-rtdb.firebaseio.com/meetups.json').catch((err) => {
	//             isLoadong = false;
	//             errorMessage = err;
	//             errorMessage = err ?? errorMessage;
	//             console.error(err);
	//         });
	//         if (res) isLoadong = false;
	//         if (!res.ok) throw new Error('Fetch data error occured, please try again');
	//         let data: IMeetup.IMeetupItem = await res.json();
	//         const loadMeetups: IMeetup.IMeetupItem[] = [];
	//         for (const key in data) {
	//             loadMeetups.push({ ...data[key], id: key });
	//         }
	//         meetups.setMeetup(loadMeetups.reverse());
	//     }
	function saveMeetup() {
		closeModal();
	}

	function clickNewMeetup() {
		$$invalidate(0, meetupStatus = EMeetupStatus.edit);
	}

	function closeModal() {
		$$invalidate(0, meetupStatus = EMeetupStatus.null);
		id = "";
	}

	function editMeetup(e) {
		$$invalidate(0, meetupStatus = EMeetupStatus.edit);
		id = e.detail;
	}

	function selectMeetup(e) {
		$$invalidate(8, isFavorite = e.detail === ESelectMeetup.favorite);
	}

	const writable_props = ["fetchedMeetups"];

	Object_1.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("fetchedMeetups" in $$props) $$invalidate(7, fetchedMeetups = $$props.fetchedMeetups);
	};

	$$self.$capture_state = () => ({
		isLoadong,
		id,
		errorMessage,
		preload,
		onMount,
		onDestroy,
		createEventDispatcher,
		scale,
		flip,
		ESelectMeetup,
		EMeetupStatus,
		meetups: meetupsStore,
		MeetupItem,
		MeetupFilter,
		EditMeetup,
		Button,
		Loading,
		dispatch,
		isFavorite,
		meetupStatus,
		fetchedMeetups,
		filteredMeetups,
		loadedMeetups,
		unsubscribe,
		saveMeetup,
		clickNewMeetup,
		closeModal,
		editMeetup,
		selectMeetup
	});

	$$self.$inject_state = $$props => {
		if ("isFavorite" in $$props) $$invalidate(8, isFavorite = $$props.isFavorite);
		if ("meetupStatus" in $$props) $$invalidate(0, meetupStatus = $$props.meetupStatus);
		if ("fetchedMeetups" in $$props) $$invalidate(7, fetchedMeetups = $$props.fetchedMeetups);
		if ("filteredMeetups" in $$props) $$invalidate(1, filteredMeetups = $$props.filteredMeetups);
		if ("loadedMeetups" in $$props) $$invalidate(9, loadedMeetups = $$props.loadedMeetups);
		if ("unsubscribe" in $$props) unsubscribe = $$props.unsubscribe;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*isFavorite, loadedMeetups*/ 768) {
			$$invalidate(1, filteredMeetups = isFavorite
			? loadedMeetups.filter(x => x.isFavorite)
			: loadedMeetups);
		}
	};

	return [
		meetupStatus,
		filteredMeetups,
		saveMeetup,
		clickNewMeetup,
		closeModal,
		editMeetup,
		selectMeetup,
		fetchedMeetups,
		isFavorite,
		loadedMeetups
	];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { fetchedMeetups: 7 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}

	get fetchedMeetups() {
		throw new Error_1("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set fetchedMeetups(value) {
		throw new Error_1("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Routes;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNGUwZTNhZTQuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvZWFzaW5nL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2FuaW1hdGUvaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL2hlbHBlci9nZW5lcmF0ZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXIvdmFsaWRhdGlvbi50cyIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvbWVldHVwLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVldHVwcy9NZWV0dXBJdGVtLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZXR1cHMvTWVldHVwRmlsdGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZWV0dXBzL0VkaXRNZWV0dXAuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaWRlbnRpdHkgYXMgbGluZWFyIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuLypcbkFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2xcbkRpc3RyaWJ1dGVkIHVuZGVyIE1JVCBMaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9lYXNlcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4qL1xuZnVuY3Rpb24gYmFja0luT3V0KHQpIHtcbiAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiAodCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSk7XG4gICAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDIpO1xufVxuZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKTtcbn1cbmZ1bmN0aW9uIGJhY2tPdXQodCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxO1xufVxuZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcbiAgICBjb25zdCBhID0gNC4wIC8gMTEuMDtcbiAgICBjb25zdCBiID0gOC4wIC8gMTEuMDtcbiAgICBjb25zdCBjID0gOS4wIC8gMTAuMDtcbiAgICBjb25zdCBjYSA9IDQzNTYuMCAvIDM2MS4wO1xuICAgIGNvbnN0IGNiID0gMzU0NDIuMCAvIDE4MDUuMDtcbiAgICBjb25zdCBjYyA9IDE2MDYxLjAgLyAxODA1LjA7XG4gICAgY29uc3QgdDIgPSB0ICogdDtcbiAgICByZXR1cm4gdCA8IGFcbiAgICAgICAgPyA3LjU2MjUgKiB0MlxuICAgICAgICA6IHQgPCBiXG4gICAgICAgICAgICA/IDkuMDc1ICogdDIgLSA5LjkgKiB0ICsgMy40XG4gICAgICAgICAgICA6IHQgPCBjXG4gICAgICAgICAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgICAgICAgICA6IDEwLjggKiB0ICogdCAtIDIwLjUyICogdCArIDEwLjcyO1xufVxuZnVuY3Rpb24gYm91bmNlSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0ICogMi4wKSlcbiAgICAgICAgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjU7XG59XG5mdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gICAgcmV0dXJuIDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0KTtcbn1cbmZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpO1xufVxuZnVuY3Rpb24gY2lyY0luKHQpIHtcbiAgICByZXR1cm4gMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIHQgKiB0KTtcbn1cbmZ1bmN0aW9uIGNpcmNPdXQodCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufVxuZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyA0LjAgKiB0ICogdCAqIHQgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wO1xufVxuZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbn1cbmZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgICBjb25zdCBmID0gdCAtIDEuMDtcbiAgICByZXR1cm4gZiAqIGYgKiBmICsgMS4wO1xufVxuZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/IDAuNSAqXG4gICAgICAgICAgICBNYXRoLnNpbigoKCsxMy4wICogTWF0aC5QSSkgLyAyKSAqIDIuMCAqIHQpICpcbiAgICAgICAgICAgIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICAgICAgOiAwLjUgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKCgtMTMuMCAqIE1hdGguUEkpIC8gMikgKiAoMi4wICogdCAtIDEuMCArIDEuMCkpICpcbiAgICAgICAgICAgIE1hdGgucG93KDIuMCwgLTEwLjAgKiAoMi4wICogdCAtIDEuMCkpICtcbiAgICAgICAgICAgIDEuMDtcbn1cbmZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKCgxMy4wICogdCAqIE1hdGguUEkpIC8gMikgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xufVxuZnVuY3Rpb24gZWxhc3RpY091dCh0KSB7XG4gICAgcmV0dXJuIChNYXRoLnNpbigoLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJKSAvIDIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wKTtcbn1cbmZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDAuMCB8fCB0ID09PSAxLjBcbiAgICAgICAgPyB0XG4gICAgICAgIDogdCA8IDAuNVxuICAgICAgICAgICAgPyArMC41ICogTWF0aC5wb3coMi4wLCAyMC4wICogdCAtIDEwLjApXG4gICAgICAgICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSB0ICogMjAuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBleHBvSW4odCkge1xuICAgIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKTtcbn1cbmZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICAgIHJldHVybiB0ID09PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpO1xufVxuZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgICB0IC89IDAuNTtcbiAgICBpZiAodCA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiB0ICogdDtcbiAgICB0LS07XG4gICAgcmV0dXJuIC0wLjUgKiAodCAqICh0IC0gMikgLSAxKTtcbn1cbmZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0O1xufVxuZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gICAgcmV0dXJuIC10ICogKHQgLSAyLjApO1xufVxuZnVuY3Rpb24gcXVhcnRJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyArOC4wICogTWF0aC5wb3codCwgNC4wKVxuICAgICAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wO1xufVxuZnVuY3Rpb24gcXVhcnRJbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQsIDQuMCk7XG59XG5mdW5jdGlvbiBxdWFydE91dCh0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjA7XG59XG5mdW5jdGlvbiBxdWludEluT3V0KHQpIHtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHQ7XG4gICAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKTtcbn1cbmZ1bmN0aW9uIHF1aW50SW4odCkge1xuICAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbn1cbmZ1bmN0aW9uIHF1aW50T3V0KHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqIHQgKiB0ICogdCArIDE7XG59XG5mdW5jdGlvbiBzaW5lSW5PdXQodCkge1xuICAgIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpO1xufVxuZnVuY3Rpb24gc2luZUluKHQpIHtcbiAgICBjb25zdCB2ID0gTWF0aC5jb3ModCAqIE1hdGguUEkgKiAwLjUpO1xuICAgIGlmIChNYXRoLmFicyh2KSA8IDFlLTE0KVxuICAgICAgICByZXR1cm4gMTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiAxIC0gdjtcbn1cbmZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICAgIHJldHVybiBNYXRoLnNpbigodCAqIE1hdGguUEkpIC8gMik7XG59XG5cbmV4cG9ydCB7IGJhY2tJbiwgYmFja0luT3V0LCBiYWNrT3V0LCBib3VuY2VJbiwgYm91bmNlSW5PdXQsIGJvdW5jZU91dCwgY2lyY0luLCBjaXJjSW5PdXQsIGNpcmNPdXQsIGN1YmljSW4sIGN1YmljSW5PdXQsIGN1YmljT3V0LCBlbGFzdGljSW4sIGVsYXN0aWNJbk91dCwgZWxhc3RpY091dCwgZXhwb0luLCBleHBvSW5PdXQsIGV4cG9PdXQsIHF1YWRJbiwgcXVhZEluT3V0LCBxdWFkT3V0LCBxdWFydEluLCBxdWFydEluT3V0LCBxdWFydE91dCwgcXVpbnRJbiwgcXVpbnRJbk91dCwgcXVpbnRPdXQsIHNpbmVJbiwgc2luZUluT3V0LCBzaW5lT3V0IH07XG4iLCJpbXBvcnQgeyBjdWJpY0luT3V0LCBsaW5lYXIsIGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nL2luZGV4Lm1qcyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiwgYXNzaWduIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5mdW5jdGlvbiBibHVyKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNJbk91dCwgYW1vdW50ID0gNSwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgZiA9IHN0eWxlLmZpbHRlciA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS5maWx0ZXI7XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgb3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfTsgZmlsdGVyOiAke2Z9IGJsdXIoJHt1ICogYW1vdW50fXB4KTtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBsaW5lYXIgfSA9IHt9KSB7XG4gICAgY29uc3QgbyA9ICtnZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9wYWNpdHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3BhY2l0eTogJHt0ICogb31gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0gPSB7fSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCk7XG4gICAgY29uc3QgcGFkZGluZ190b3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICAgIGNvbnN0IHBhZGRpbmdfYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICBjb25zdCBtYXJnaW5fdG9wID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApO1xuICAgIGNvbnN0IG1hcmdpbl9ib3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgY29uc3QgYm9yZGVyX3RvcF93aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICAgIGNvbnN0IGJvcmRlcl9ib3R0b21fd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+ICdvdmVyZmxvdzogaGlkZGVuOycgK1xuICAgICAgICAgICAgYG9wYWNpdHk6ICR7TWF0aC5taW4odCAqIDIwLCAxKSAqIG9wYWNpdHl9O2AgK1xuICAgICAgICAgICAgYGhlaWdodDogJHt0ICogaGVpZ2h0fXB4O2AgK1xuICAgICAgICAgICAgYHBhZGRpbmctdG9wOiAke3QgKiBwYWRkaW5nX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLWJvdHRvbTogJHt0ICogcGFkZGluZ19ib3R0b219cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLXRvcDogJHt0ICogbWFyZ2luX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiAke3QgKiBtYXJnaW5fYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci10b3Atd2lkdGg6ICR7dCAqIGJvcmRlcl90b3Bfd2lkdGh9cHg7YCArXG4gICAgICAgICAgICBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHt0ICogYm9yZGVyX2JvdHRvbV93aWR0aH1weDtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNjYWxlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHN0YXJ0ID0gMCwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICBjb25zdCBzZCA9IDEgLSBzdGFydDtcbiAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAoX3QsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHNjYWxlKCR7MSAtIChzZCAqIHUpfSk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9XG5cdFx0YFxuICAgIH07XG59XG5mdW5jdGlvbiBkcmF3KG5vZGUsIHsgZGVsYXkgPSAwLCBzcGVlZCwgZHVyYXRpb24sIGVhc2luZyA9IGN1YmljSW5PdXQgfSA9IHt9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGJsdXIsIGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsImltcG9ydCB7IGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nL2luZGV4Lm1qcyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5cbmZ1bmN0aW9uIGZsaXAobm9kZSwgYW5pbWF0aW9uLCBwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNjYWxlWCA9IGFuaW1hdGlvbi5mcm9tLndpZHRoIC8gbm9kZS5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBhbmltYXRpb24uZnJvbS5oZWlnaHQgLyBub2RlLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBkeCA9IChhbmltYXRpb24uZnJvbS5sZWZ0IC0gYW5pbWF0aW9uLnRvLmxlZnQpIC8gc2NhbGVYO1xuICAgIGNvbnN0IGR5ID0gKGFuaW1hdGlvbi5mcm9tLnRvcCAtIGFuaW1hdGlvbi50by50b3ApIC8gc2NhbGVZO1xuICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IChkKSA9PiBNYXRoLnNxcnQoZCkgKiAxMjAsIGVhc2luZyA9IGN1YmljT3V0IH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uOiBpc19mdW5jdGlvbihkdXJhdGlvbikgPyBkdXJhdGlvbihkKSA6IGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgdHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCAke3UgKiBkeX1weCk7YFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGZsaXAgfTtcbiIsbnVsbCxudWxsLG51bGwsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG5cclxuICAgIGltcG9ydCBtZWV0dXBzIGZyb20gJy4uLy4uL3N0b3Jlcy9tZWV0dXAnO1xyXG5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uLy4uL21vZGFscyc7XHJcblxyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuLy4uL1VJL0J1dHRvbi5zdmVsdGUnO1xyXG4gICAgaW1wb3J0IEJhZGdlIGZyb20gJy4vLi4vVUkvQmFkZ2Uuc3ZlbHRlJztcclxuICAgIGltcG9ydCBMb2FkaW5nIGZyb20gJy4vLi4vVUkvTG9hZGluZy5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG1lZXR1cDogSU1lZXR1cC5JTWVldHVwSXRlbTtcclxuXHJcbiAgICBsZXQgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGJ1dHRvbkFMaW5rOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgaHJlZjogYG1haWx0bzoke21lZXR1cC5jb250YWN0RW1haWx9YCxcclxuICAgIH07XHJcblxyXG4gICAgbGV0IGJ1dHRvbkZhdm9yaXRlOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgbW9kZTogJ291dGxpbmUnLFxyXG4gICAgICAgIGNvbG9yOiAnc3VjY2VzcycsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBidXR0b25VbmZhdm9yaXRlOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgbW9kZTogJ291dGxpbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiB0b2dnbGVGYXZvcml0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICBpc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBpZiAobWVldHVwLmlkKSBkZWxldGUgbWVldHVwLmlkO1xyXG4gICAgICAgIG1lZXR1cC5pc0Zhdm9yaXRlID0gIW1lZXR1cC5pc0Zhdm9yaXRlO1xyXG4gICAgICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3ZlbHRlLW1lZXVwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9tZWV0dXBzLyR7bWVldHVwLmlkfS5qc29uYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lZXR1cCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpO1xyXG4gICAgICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBtZWV0dXBzLnRvZ2dsZUZhdm9yaXRlKG1lZXR1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2hvd0RldGFpbCgpOiB2b2lkIHtcclxuICAgICAgICBkaXNwYXRjaCgnc2hvdy1kZXRhaWwnLCBtZWV0dXAuaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRNZWV0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgZGlzcGF0Y2goJ2VkaXQtbWVldHVwJywgbWVldHVwLmlkKTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48YXJ0aWNsZT5cclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICB7bWVldHVwLnRpdGxlfVxyXG4gICAgICAgICAgICB7I2lmIG1lZXR1cC5pc0Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAge21lZXR1cC5pc0Zhdm9yaXRlfVxyXG4gICAgICAgICAgICAgICAgPEJhZGdlPuKdpCBGYXZvcml0ZTwvQmFkZ2U+XHJcbiAgICAgICAgICAgIHsvaWZ9XHJcbiAgICAgICAgPC9oMT5cclxuICAgICAgICA8aDIgY2xhc3M9XCJ0ZXh0LW92ZXJmbG93LWVsbGlwc2lzIHRleHQtb3ZlcmZsb3ctZWxsaXBzaXMtMVwiPnttZWV0dXAuc3ViVGl0bGV9PC9oMj5cclxuICAgICAgICA8aDEgY2xhc3M9XCJ0ZXh0LW92ZXJmbG93LWVsbGlwc2lzIHRleHQtb3ZlcmZsb3ctZWxsaXBzaXMtMVwiPnttZWV0dXAuYWRkcmVzc308L2gxPlxyXG4gICAgPC9oZWFkZXI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImltYWdlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9e21lZXR1cC5pbWFnZVVybH0gYWx0PXttZWV0dXAudGl0bGV9IC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1vdmVyZmxvdy1lbGxpcHNpcyB0ZXh0LW92ZXJmbG93LWVsbGlwc2lzLTJcIj57bWVldHVwLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b249e2J1dHRvblVuZmF2b3JpdGV9IG9uOmNsaWNrPXtlZGl0TWVldHVwfT5FZGl0PC9CdXR0b24+XHJcblxyXG4gICAgICAgIHsjaWYgaXNMb2FkaW5nfVxyXG4gICAgICAgICAgICA8c3Bhbj4gQ2hhbmdpbmcuLi4gJmVuc3A7JmVuc3A7PC9zcGFuPlxyXG4gICAgICAgIHs6ZWxzZX1cclxuICAgICAgICAgICAgPEJ1dHRvbiBidXR0b249e21lZXR1cC5pc0Zhdm9yaXRlID8gYnV0dG9uVW5mYXZvcml0ZSA6IGJ1dHRvbkZhdm9yaXRlfSBvbjpjbGljaz17dG9nZ2xlRmF2b3JpdGV9PlxyXG4gICAgICAgICAgICAgICAge21lZXR1cC5pc0Zhdm9yaXRlID8gJ1VuZmF2b3JpdGUnIDogJ0Zhdm9yaXRlJ31cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgey9pZn1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17c2hvd0RldGFpbH0+U2hvdyBEZXRhaWw8L0J1dHRvbj5cclxuICAgIDwvZm9vdGVyPlxyXG48L2FydGljbGU+XHJcblxyXG48c3R5bGU+XHJcbiAgICBhcnRpY2xlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcblxyXG4gICAgICAgIC50ZXh0LW92ZXJmbG93LWVsbGlwc2lzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7IC8qIOWwh+WwjeWDj+S9nOeCuuW9iOaAp+S8uOe4ruebkuaooeWei+mhr+ekuiAqL1xyXG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsOyAvKiDoqK3nva7miJbmqqLmn6XkvLjnuK7nm5LlsI3lg4/nmoTlrZDlhYPntKDnmoTmjpLliJfmlrnlvI8gKi9cclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qICDlnKjlpJrooYzmlofmnKznmoTmg4Xms4HkuIvvvIznlKguLi7pmrHol4/otoXlh7rnr4TlnI3nmoTmlofmnKwgKi9cclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtb3ZlcmZsb3ctZWxsaXBzaXMtMSB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMTsgLyog55So5L6G6ZmQ5Yi25Zyo5LiA5YCL5aGK5YWD57Sg6aGv56S655qE5paH5pys55qE6KGM5pW4ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGV4dC1vdmVyZmxvdy1lbGxpcHNpcy0yIHtcclxuICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiDnlKjkvobpmZDliLblnKjkuIDlgIvloYrlhYPntKDpoa/npLrnmoTmlofmnKznmoTooYzmlbggKi9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICAuY29udGVudCxcclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1hZ2UgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMS5pcy1mYXZvcml0ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMWExMjk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDRyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcclxuICAgIGltcG9ydCB7IEVTZWxlY3RNZWV0dXAgfSBmcm9tICcuLi8uLi9lbnVtcy9tZWV0dXAnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBsZXQgc2VsZWN0ZWRCdXR0b246IEVTZWxlY3RNZWV0dXAgPSBFU2VsZWN0TWVldHVwLmFsbDtcclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RBbGwoKTogdm9pZCB7XHJcbiAgICAgICAgc2VsZWN0ZWRCdXR0b24gPSBFU2VsZWN0TWVldHVwLmFsbDtcclxuICAgICAgICBkaXNwYXRjaCgnc2VsZWN0JywgRVNlbGVjdE1lZXR1cC5hbGwpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdEZhdm9yaXRlcygpOiB2b2lkIHtcclxuICAgICAgICBzZWxlY3RlZEJ1dHRvbiA9IEVTZWxlY3RNZWV0dXAuZmF2b3JpdGU7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NlbGVjdCcsIEVTZWxlY3RNZWV0dXAuZmF2b3JpdGUpO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXY+XHJcbiAgICA8YnV0dG9uIGNsYXNzOmFjdGl2ZT17c2VsZWN0ZWRCdXR0b24gPT09IEVTZWxlY3RNZWV0dXAuYWxsfSBvbjpjbGljaz17c2VsZWN0QWxsfT5BbGw8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M6YWN0aXZlPXtzZWxlY3RlZEJ1dHRvbiA9PT0gRVNlbGVjdE1lZXR1cC5mYXZvcml0ZX0gb246Y2xpY2s9e3NlbGVjdEZhdm9yaXRlc30+RmF2b3JpdGVzPC9idXR0b24+XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgZGl2IHtcclxuICAgICAgICBmb250LXNpemU6IDBweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNhYWFhYWE7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWFhYWE7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246bGFzdC1vZi10eXBlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246aG92ZXIsXHJcbiAgICBidXR0b246YWN0aXZlLFxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yTWFpbjtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvck1haW47XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHR5cGUgeyBJTWVldHVwIH0gZnJvbSAnLi4vLi4vbW9kYWxzJztcclxuICAgIGltcG9ydCB7IEVJbnB1dFR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy9tZWV0dXAnO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgdGV4dElucHV0OiBJTWVldHVwLklUZXh0SW5wdXQgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIGxhYmVsOiAnJyxcclxuICAgICAgICB0eXBlOiBFSW5wdXRUeXBlLnRleHQsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICB2YWx1ZTogJycsXHJcblxyXG4gICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICAgIHZhbGlkTWVzc2FnZTogJycsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBpc0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gZm9jdXNTdGF0dXMoKTogdm9pZCB7XHJcbiAgICAgICAgaXNGb2N1cyA9IHRydWU7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbFwiPlxyXG4gICAgPGxhYmVsIGZvcj17dGV4dElucHV0LmlkfT57dGV4dElucHV0LmxhYmVsfTwvbGFiZWw+XHJcbiAgICB7I2lmIHRleHRJbnB1dC50eXBlID09PSBFSW5wdXRUeXBlLnRleHRhcmVhfVxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICBjbGFzczppbnZhbGlkPXshdGV4dElucHV0LnZhbGlkICYmIGlzRm9jdXN9XHJcbiAgICAgICAgICAgIHJvd3M9e3RleHRJbnB1dC5yb3dzfVxyXG4gICAgICAgICAgICBpZD17dGV4dElucHV0LmlkfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGV4dElucHV0LnZhbHVlfVxyXG4gICAgICAgICAgICBvbjppbnB1dFxyXG4gICAgICAgICAgICBvbjpibHVyPXtmb2N1c1N0YXR1c31cclxuICAgICAgICAvPlxyXG4gICAgezplbHNlfVxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBjbGFzczppbnZhbGlkPXshdGV4dElucHV0LnZhbGlkICYmIGlzRm9jdXN9XHJcbiAgICAgICAgICAgIHR5cGU9e3RleHRJbnB1dC50eXBlfVxyXG4gICAgICAgICAgICBpZD17dGV4dElucHV0LmlkfVxyXG4gICAgICAgICAgICB2YWx1ZT17dGV4dElucHV0LnZhbHVlfVxyXG4gICAgICAgICAgICBvbjppbnB1dFxyXG4gICAgICAgICAgICBvbjpibHVyPXtmb2N1c1N0YXR1c31cclxuICAgICAgICAvPlxyXG4gICAgey9pZn1cclxuXHJcbiAgICB7I2lmIHRleHRJbnB1dC52YWxpZE1lc3NhZ2UgJiYgIXRleHRJbnB1dC52YWxpZCAmJiBpc0ZvY3VzfVxyXG4gICAgICAgIDxwIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPnt0ZXh0SW5wdXQudmFsaWRNZXNzYWdlfTwvcD5cclxuICAgIHsvaWZ9XHJcbjwvZGl2PlxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcblxyXG4gICAgICAgIGlucHV0LFxyXG4gICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmb250OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMTVyZW0gMC4yNXJlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMXMgZWFzZS1vdXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dDpmb2N1cyxcclxuICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2U0MDc2MztcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW52YWxpZCB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRlM2UzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAuMjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG4gICAgaW1wb3J0IHsgZmx5LCBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xyXG5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uL21vZGFscyc7XHJcblxyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuL0J1dHRvbi5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG1vZGFsVGl0bGU6IHN0cmluZztcclxuXHJcbiAgICBsZXQgZmx5VHJhbnNpdGlvbjogSU1lZXR1cC5JRmx5UGFyYW1zID0ge1xyXG4gICAgICAgIHk6IDMwMCxcclxuICAgICAgICBkdXJhdGlvbjogNjUwLFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIGRpc3BhdGNoKCdjbG9zZS1tb2RhbCcpO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgdHJhbnNpdGlvbjpmYWRlIGNsYXNzPVwibW9kYWwtYmFja2Ryb3BcIiBvbjpjbGljaz17Y2xvc2VNb2RhbH0gLz5cclxuPGRpdiB0cmFuc2l0aW9uOmZseT17Zmx5VHJhbnNpdGlvbn0gY2xhc3M9XCJtb2RhbFwiPlxyXG4gICAgPGgxPnttb2RhbFRpdGxlfTwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxzbG90IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXtjbG9zZU1vZGFsfT5DbG9zZTwvQnV0dG9uPlxyXG4gICAgICAgIDwvc2xvdD5cclxuICAgIDwvZm9vdGVyPlxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5tb2RhbC1iYWNrZHJvcCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEwdmg7XHJcbiAgICAgICAgbGVmdDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDogODB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gU2xhYicsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwcmVtO1xyXG4gICAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDIwcmVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG4gICAgaW1wb3J0IG1lZXR1cHMgZnJvbSAnLi4vLi4vc3RvcmVzL21lZXR1cCc7XHJcblxyXG4gICAgaW1wb3J0IHR5cGUgeyBJTWVldHVwIH0gZnJvbSAnLi4vLi4vbW9kYWxzJztcclxuICAgIGltcG9ydCB7IEVJbnB1dFR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy9tZWV0dXAnO1xyXG4gICAgaW1wb3J0IHsgU2VydmljZVZhbGlkYXRpb24sIFNlcnZpY2VHZW5lcmF0ZSB9IGZyb20gJy4uLy4uL2hlbHBlcic7XHJcblxyXG4gICAgaW1wb3J0IFRleHRJbnB1dCBmcm9tICcuLy4uL1VJL1RleHRJbnB1dC5zdmVsdGUnO1xyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuLy4uL1VJL0J1dHRvbi5zdmVsdGUnO1xyXG4gICAgaW1wb3J0IE1vZGFscyBmcm9tICcuLi9VSS9Nb2RhbC5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBsZXQgbWVldHVwOiBJTWVldHVwLklNZWV0dXBJdGVtID0ge1xyXG4gICAgICAgIC8vIGlkOiBTZXJ2aWNlR2VuZXJhdGUucmFuZG9tSWQoKSxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgc3ViVGl0bGU6ICcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcclxuICAgICAgICBpbWFnZVVybDogJycsXHJcbiAgICAgICAgYWRkcmVzczogJycsXHJcbiAgICAgICAgY29udGFjdEVtYWlsOiAnJyxcclxuICAgICAgICBpc0Zhdm9yaXRlOiBmYWxzZSxcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGxldCBpZDogc3RyaW5nID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICBjb25zdCB1bnN1YnNjcmliZSA9IG1lZXR1cHMuc3Vic2NyaWJlKChpdGVtcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1lZXR1cDogSU1lZXR1cC5JTWVldHVwSXRlbSA9IGl0ZW1zLmZpbmQoKHgpID0+IHguaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgbWVldHVwID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzZWxlY3RlZE1lZXR1cCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRpdGxlSW5wdXQ6IElNZWV0dXAuSVRleHRJbnB1dCA9IHtcclxuICAgICAgICBpZDogJ3RpdGxlJyxcclxuICAgICAgICBsYWJlbDogJ1RpdGxlJyxcclxuICAgICAgICB2YWx1ZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB2YWxpZE1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCB0aXRsZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN1YlRpdGxlSW5wdXQ6IElNZWV0dXAuSVRleHRJbnB1dCA9IHtcclxuICAgICAgICBpZDogJ3N1YlRpdGxlJyxcclxuICAgICAgICBsYWJlbDogJ1N1YiBUaXRsZScsXHJcbiAgICAgICAgdmFsdWU6IG1lZXR1cC5zdWJUaXRsZSxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgc3ViIHRpdGxlJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgYWRkcmVzc0lucHV0OiBJTWVldHVwLklUZXh0SW5wdXQgPSB7XHJcbiAgICAgICAgaWQ6ICdhZGRyZXNzJyxcclxuICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxyXG4gICAgICAgIHZhbHVlOiBtZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgYWRkcmVzcycsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGltYWdlVXJsSW5wdXQ6IElNZWV0dXAuSVRleHRJbnB1dCA9IHtcclxuICAgICAgICBpZDogJ2ltYWdlVXJsJyxcclxuICAgICAgICBsYWJlbDogJ0ltYWdlIFVybCcsXHJcbiAgICAgICAgdmFsdWU6IG1lZXR1cC5pbWFnZVVybCxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgaW1hZ2UgdXJsJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgY29udGFjdEVtYWlsSW5wdXQ6IElNZWV0dXAuSVRleHRJbnB1dCA9IHtcclxuICAgICAgICBpZDogJ2NvbnRhY3RFbWFpbCcsXHJcbiAgICAgICAgbGFiZWw6ICdDb250YWN0IEVtYWlsJyxcclxuICAgICAgICB0eXBlOiBFSW5wdXRUeXBlLmVtYWlsLFxyXG4gICAgICAgIHZhbHVlOiBtZWV0dXAuY29udGFjdEVtYWlsLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB2YWxpZE1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBjb250YWN0IGVtYWlsJyxcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dDogSU1lZXR1cC5JVGV4dElucHV0ID0ge1xyXG4gICAgICAgIGlkOiAnZGVzY3JpcHRpb24nLFxyXG4gICAgICAgIGxhYmVsOiAnRGVzY3JpcHRpb24nLFxyXG4gICAgICAgIHR5cGU6IEVJbnB1dFR5cGUudGV4dGFyZWEsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICB2YWx1ZTogbWVldHVwLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgIHZhbGlkOiBmYWxzZSxcclxuICAgICAgICB2YWxpZE1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBkZXNjcmlwdGlvbicsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBidXR0b25DYW5jZWw6IElNZWV0dXAuSUJ1dHRvbiA9IHtcclxuICAgICAgICBtb2RlOiAnb3V0bGluZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBtb2RhbFRpdGxlOiBzdHJpbmcgPSBpZCA/ICdFZGl0IE1lZXR1cCcgOiAnQ3JlYXRlIE5ldyBNZWV0dXAnO1xyXG5cclxuICAgIGxldCBpc0Zvcm1WYWxpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIC8vIHdhdGNoIHZhbHVlLCBpZiB2YWx1ZSBjaGFuZ2UgdXBkYXRlIFVJXHJcbiAgICAkOiB0aXRsZUlucHV0LnZhbGlkID0gIVNlcnZpY2VWYWxpZGF0aW9uLmlzRW1wdHkobWVldHVwLnRpdGxlKTtcclxuICAgICQ6IHN1YlRpdGxlSW5wdXQudmFsaWQgPSAhU2VydmljZVZhbGlkYXRpb24uaXNFbXB0eShtZWV0dXAuc3ViVGl0bGUpO1xyXG4gICAgJDogYWRkcmVzc0lucHV0LnZhbGlkID0gIVNlcnZpY2VWYWxpZGF0aW9uLmlzRW1wdHkobWVldHVwLmFkZHJlc3MpO1xyXG4gICAgJDogaW1hZ2VVcmxJbnB1dC52YWxpZCA9IFNlcnZpY2VWYWxpZGF0aW9uLmlzSW1hZ2UobWVldHVwLmltYWdlVXJsKTtcclxuICAgICQ6IGNvbnRhY3RFbWFpbElucHV0LnZhbGlkID0gU2VydmljZVZhbGlkYXRpb24uaXNFbWFpbChtZWV0dXAuY29udGFjdEVtYWlsKTtcclxuICAgICQ6IGRlc2NyaXB0aW9uSW5wdXQudmFsaWQgPSAhU2VydmljZVZhbGlkYXRpb24uaXNFbXB0eShtZWV0dXAuZGVzY3JpcHRpb24pO1xyXG4gICAgJDogaXNGb3JtVmFsaWQgPVxyXG4gICAgICAgIHRpdGxlSW5wdXQudmFsaWQgJiYgc3ViVGl0bGVJbnB1dC52YWxpZCAmJiBhZGRyZXNzSW5wdXQudmFsaWQgJiYgaW1hZ2VVcmxJbnB1dC52YWxpZCAmJiBjb250YWN0RW1haWxJbnB1dC52YWxpZCAmJiBkZXNjcmlwdGlvbklucHV0LnZhbGlkO1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVRpdGxlKGUpOiB2b2lkIHtcclxuICAgICAgICBtZWV0dXAudGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJUaXRsZShlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBtZWV0dXAuc3ViVGl0bGUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVBZGRyZXNzKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cC5hZGRyZXNzID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlSW1hZ2VVcmwoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbWVldHVwLmltYWdlVXJsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ29udGFjdEVtYWlsKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cC5jb250YWN0RW1haWwgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVEZXNjcmlwdGlvbihlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBtZWV0dXAuZGVzY3JpcHRpb24gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBzYXZlTWVldHVwKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIC8vIGNvbnN0IG1lZXR1cERhdGE6IElNZWV0dXAuSU1lZXR1cEl0ZW0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lZXR1cCkpO1xyXG4gICAgICAgIGNvbnN0IG1lZXR1cERhdGE6IElNZWV0dXAuSU1lZXR1cEl0ZW0gPSBtZWV0dXA7XHJcblxyXG4gICAgICAgIC8vIGVkaXQgbW9kZVxyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBpZiAobWVldHVwRGF0YS5pZCkgZGVsZXRlIG1lZXR1cERhdGEuaWQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3ZlbHRlLW1lZXVwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9tZWV0dXBzLyR7aWR9Lmpzb25gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZWV0dXBEYXRhKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpO1xyXG5cclxuICAgICAgICAgICAgbWVldHVwcy51cGRhdGVNZWV0dXAoaWQsIG1lZXR1cERhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vc3ZlbHRlLW1lZXVwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9tZWV0dXBzLmpzb24nLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1lZXR1cERhdGEpLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBbiBlcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluJyk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZGF0YTogeyBuYW1lOiBzdHJpbmcgfSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIG1lZXR1cERhdGEuaWQgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgICAgIG1lZXR1cHMuc2F2ZU1lZXR1cChtZWV0dXBEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdtZWV0dXBEYXRhID0+ICcsIG1lZXR1cERhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcGF0Y2goJ3NhdmUtZGF0YScsIG1lZXR1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICBkaXNwYXRjaCgnY2xvc2UtbW9kYWwnKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVNZWV0dXAoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgcmVzOiBhbnkgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9zdmVsdGUtbWVldXAtZGVmYXVsdC1ydGRiLmZpcmViYXNlaW8uY29tL21lZXR1cHMvJHtpZH0uanNvbmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdBbiBlcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluJyk7XHJcblxyXG4gICAgICAgIG1lZXR1cHMuZGVsZXRlTWVldHVwKGlkKTtcclxuICAgICAgICBkaXNwYXRjaCgnc2F2ZS1kYXRhJywgbWVldHVwKTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48TW9kYWxzIHttb2RhbFRpdGxlfSBvbjpjbG9zZS1tb2RhbD5cclxuICAgIDxmb3JtIG9uOnN1Ym1pdHxwcmV2ZW50RGVmYXVsdD17c2F2ZU1lZXR1cH0+XHJcbiAgICAgICAgPFRleHRJbnB1dCB0ZXh0SW5wdXQ9e3RpdGxlSW5wdXR9IG9uOmlucHV0PXtoYW5kbGVUaXRsZX0gLz5cclxuICAgICAgICA8VGV4dElucHV0IHRleHRJbnB1dD17c3ViVGl0bGVJbnB1dH0gb246aW5wdXQ9e2hhbmRsZVN1YlRpdGxlfSAvPlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdGV4dElucHV0PXthZGRyZXNzSW5wdXR9IG9uOmlucHV0PXtoYW5kbGVBZGRyZXNzfSAvPlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdGV4dElucHV0PXtpbWFnZVVybElucHV0fSBvbjppbnB1dD17aGFuZGxlSW1hZ2VVcmx9IC8+XHJcbiAgICAgICAgPFRleHRJbnB1dCB0ZXh0SW5wdXQ9e2NvbnRhY3RFbWFpbElucHV0fSBvbjppbnB1dD17aGFuZGxlQ29udGFjdEVtYWlsfSAvPlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdGV4dElucHV0PXtkZXNjcmlwdGlvbklucHV0fSBvbjppbnB1dD17aGFuZGxlRGVzY3JpcHRpb259IC8+XHJcbiAgICA8L2Zvcm0+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvblwiIHNsb3Q9XCJmb290ZXJcIj5cclxuICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXtzYXZlTWVldHVwfSBkaXNhYmxlZD17IWlzRm9ybVZhbGlkfT5TYXZlPC9CdXR0b24+XHJcblxyXG4gICAgICAgIHsjaWYgaWR9XHJcbiAgICAgICAgICAgIDxCdXR0b24gb246Y2xpY2s9e2RlbGV0ZU1lZXR1cH0+RGVsZXRlPC9CdXR0b24+XHJcbiAgICAgICAgey9pZn1cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBidXR0b249e2J1dHRvbkNhbmNlbH0gb246Y2xpY2s9e2Nsb3NlTW9kYWx9PkNhbmNlbDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvTW9kYWxzPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxyXG4gICAgaW1wb3J0IHR5cGUgeyBJTWVldHVwIH0gZnJvbSAnLi4vbW9kYWxzJztcclxuXHJcbiAgICBsZXQgaXNMb2Fkb25nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGlkOiBzdHJpbmc7XHJcbiAgICBsZXQgZXJyb3JNZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gcHJlbG9hZChwYWdlKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygncGFnZSA9PiAnLCBwYWdlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goJ2h0dHBzOi8vc3ZlbHRlLW1lZXVwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9tZWV0dXBzLmpzb24nKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmV0Y2hpbmcgbWVldHVwcyBmYWlsZWQsIHBsZWFzZSB0cnkgYWdhaW4gbGF0ZXIhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZldGNoZWRNZWV0dXBzOiBJTWVldHVwLklNZWV0dXBJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaGVkTWVldHVwcy5wdXNoKHsgLi4uZGF0YVtrZXldLCBpZDoga2V5IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGZldGNoZWRNZWV0dXBzOiBmZXRjaGVkTWVldHVwcyB9O1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaXNMb2Fkb25nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnI7XHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIgPz8gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcig1MDAsICdDb3VsZCBub3QgZmV0Y2ggbWVldHVwcycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBubyB1c2UsIGZvciBub3cgIG5vdCBrbm93IHJlYXNvblxyXG4gICAgLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWQocGFnZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3BhZ2UgPT4gJywgcGFnZSk7XHJcblxyXG4gICAgLy8gICAgIGxldCByZXM6IGFueSA9IGF3YWl0IHRoaXMuZmV0Y2goJ2h0dHBzOi8vc3ZlbHRlLW1lZXVwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9tZWV0dXBzLmpzb24nKS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGlzTG9hZG9uZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnI7XHJcbiAgICAvLyAgICAgICAgIGVycm9yTWVzc2FnZSA9IGVyciA/PyBlcnJvck1lc3NhZ2U7XHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5lcnJvcig1MDAsICdDb3VsZCBub3QgZmV0Y2ggbWVldHVwcycpO1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vICAgICBpZiAocmVzKSBpc0xvYWRvbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdGZXRjaCBkYXRhIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuICAgIC8vICAgICBsZXQgZGF0YTogSU1lZXR1cC5JTWVldHVwSXRlbSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAvLyAgICAgY29uc3QgZmV0Y2hlZE1lZXR1cHM6IElNZWV0dXAuSU1lZXR1cEl0ZW1bXSA9IFtdO1xyXG4gICAgLy8gICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgZmV0Y2hlZE1lZXR1cHMucHVzaCh7IC4uLmRhdGFba2V5XSwgaWQ6IGtleSB9KTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIHJldHVybiBmZXRjaGVkTWVldHVwcztcclxuICAgIC8vIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgb25Nb3VudCwgb25EZXN0cm95LCBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG4gICAgaW1wb3J0IHsgc2NhbGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XHJcbiAgICBpbXBvcnQgeyBmbGlwIH0gZnJvbSAnc3ZlbHRlL2FuaW1hdGUnO1xyXG5cclxuICAgIGltcG9ydCB7IEVTZWxlY3RNZWV0dXAsIEVNZWV0dXBTdGF0dXMgfSBmcm9tICcuLi9lbnVtcy9tZWV0dXAnO1xyXG5cclxuICAgIGltcG9ydCBtZWV0dXBzIGZyb20gJy4uL3N0b3Jlcy9tZWV0dXAnO1xyXG5cclxuICAgIGltcG9ydCBNZWV0dXBJdGVtIGZyb20gJy4uL2NvbXBvbmVudHMvTWVldHVwcy9NZWV0dXBJdGVtLnN2ZWx0ZSc7XHJcbiAgICBpbXBvcnQgTWVldHVwRmlsdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTWVldHVwcy9NZWV0dXBGaWx0ZXIuc3ZlbHRlJztcclxuICAgIGltcG9ydCBFZGl0TWVldHVwIGZyb20gJy4uL2NvbXBvbmVudHMvTWVldHVwcy9FZGl0TWVldHVwLnN2ZWx0ZSc7XHJcblxyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL1VJL0J1dHRvbi5zdmVsdGUnO1xyXG4gICAgaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9VSS9Mb2FkaW5nLnN2ZWx0ZSc7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2g6IChuYW1lOiBzdHJpbmcsIGRldGFpbD86IGFueSkgPT4gdm9pZCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xyXG5cclxuICAgIGxldCBpc0Zhdm9yaXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IG1lZXR1cFN0YXR1czogRU1lZXR1cFN0YXR1cztcclxuXHJcbiAgICBleHBvcnQgbGV0IGZldGNoZWRNZWV0dXBzOiBJTWVldHVwLklNZWV0dXBJdGVtW10gPSBbXTtcclxuICAgIGxldCBmaWx0ZXJlZE1lZXR1cHM6IElNZWV0dXAuSU1lZXR1cEl0ZW1bXSA9IFtdO1xyXG4gICAgbGV0IGxvYWRlZE1lZXR1cHM6IElNZWV0dXAuSU1lZXR1cEl0ZW1bXSA9IFtdO1xyXG5cclxuICAgICQ6IGZpbHRlcmVkTWVldHVwcyA9IGlzRmF2b3JpdGUgPyBsb2FkZWRNZWV0dXBzLmZpbHRlcigoeDogSU1lZXR1cC5JTWVldHVwSXRlbSkgPT4geC5pc0Zhdm9yaXRlKSA6IGxvYWRlZE1lZXR1cHM7XHJcblxyXG4gICAgbGV0IHVuc3Vic2NyaWJlOiBGdW5jdGlvbjtcclxuXHJcbiAgICAvLyBmZXRjaCBkYXRhIGluIGNsaWVudCBzaWRlXHJcbiAgICAvLyBvbk1vdW50KFxyXG4gICAgLy8gICAgIGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIC8vICAgICAgICAgYXdhaXQgZ2V0QVBJRGF0YSgpO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICAvLyApO1xyXG5cclxuICAgIG9uRGVzdHJveSgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVuc3Vic2NyaWJlKSB7XHJcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgb25Nb3VudCgoKSA9PiB7XHJcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBtZWV0dXBzLnN1YnNjcmliZSgoaXRlbTogSU1lZXR1cC5JTWVldHVwSXRlbVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRlZE1lZXR1cHMgPSBpdGVtO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1lZXR1cHMuc2V0TWVldHVwKGZldGNoZWRNZWV0dXBzLnJldmVyc2UoKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBhc3luYyBmdW5jdGlvbiBnZXRBUElEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8gICAgICAgICBpc0xvYWRvbmcgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB1bnN1YnNjcmliZSA9IG1lZXR1cHMuc3Vic2NyaWJlKChpdGVtcykgPT4gKGZldGNoZWRNZWV0dXBzID0gaXRlbXMpKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJyA9PiAnLCB1bnN1YnNjcmliZSk7XHJcbiAgICAvLyAgICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IGZldGNoKCdodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy5qc29uJykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaXNMb2Fkb25nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnI7XHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIgPz8gZXJyb3JNZXNzYWdlO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMpIGlzTG9hZG9uZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdGZXRjaCBkYXRhIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuICAgIC8vICAgICAgICAgbGV0IGRhdGE6IElNZWV0dXAuSU1lZXR1cEl0ZW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBsb2FkTWVldHVwczogSU1lZXR1cC5JTWVldHVwSXRlbVtdID0gW107XHJcbiAgICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgICAgIGxvYWRNZWV0dXBzLnB1c2goeyAuLi5kYXRhW2tleV0sIGlkOiBrZXkgfSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIG1lZXR1cHMuc2V0TWVldHVwKGxvYWRNZWV0dXBzLnJldmVyc2UoKSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVNZWV0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsaWNrTmV3TWVldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cFN0YXR1cyA9IEVNZWV0dXBTdGF0dXMuZWRpdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cFN0YXR1cyA9IEVNZWV0dXBTdGF0dXMubnVsbDtcclxuICAgICAgICBpZCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRNZWV0dXAoZSk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cFN0YXR1cyA9IEVNZWV0dXBTdGF0dXMuZWRpdDtcclxuICAgICAgICBpZCA9IGUuZGV0YWlsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdE1lZXR1cChlOiBhbnkpIHtcclxuICAgICAgICBpc0Zhdm9yaXRlID0gZS5kZXRhaWwgPT09IEVTZWxlY3RNZWV0dXAuZmF2b3JpdGU7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gICAgPHRpdGxlPkFsbCBNZWV0dXBzPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbnsjaWYgbWVldHVwU3RhdHVzID09PSBFTWVldHVwU3RhdHVzLmVkaXR9XHJcbiAgICA8RWRpdE1lZXR1cCBvbjpzYXZlLWRhdGE9e3NhdmVNZWV0dXB9IG9uOmNsb3NlLW1vZGFsPXtjbG9zZU1vZGFsfSB7aWR9IC8+XHJcbnsvaWZ9XHJcblxyXG57I2lmIGlzTG9hZG9uZ31cclxuICAgIDxMb2FkaW5nIC8+XHJcbns6ZWxzZX1cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWVldHVwLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPE1lZXR1cEZpbHRlciBvbjpzZWxlY3Q9e3NlbGVjdE1lZXR1cH0gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17Y2xpY2tOZXdNZWV0dXB9Pk5ldyBNZWV0dXA8L0J1dHRvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICB7I2lmIGZpbHRlcmVkTWVldHVwcy5sZW5ndGggPT09IDB9XHJcbiAgICAgICAgPHAgY2xhc3M9XCJuby1tZWV0dXBcIj5ObyBtZWV0dXBzIGZvdW5kLCB5b3UgY2FuIHN0YXJ0IGFkZGluZyBzb21lIG1lZXR1cHM8L3A+XHJcbiAgICB7L2lmfVxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZmV0Y2hlZE1lZXR1cHNcIj5cclxuICAgICAgICB7I2VhY2ggZmlsdGVyZWRNZWV0dXBzIGFzIG1lZXR1cCAobWVldHVwLmlkKX1cclxuICAgICAgICAgICAgPGRpdiB0cmFuc2l0aW9uOnNjYWxlPXt7IGR1cmF0aW9uOiA4MDAgfX0gYW5pbWF0ZTpmbGlwPXt7IGR1cmF0aW9uOiA4MDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TWVldHVwSXRlbSB7bWVldHVwfSBvbjplZGl0LW1lZXR1cD17ZWRpdE1lZXR1cH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey9lYWNofVxyXG4gICAgPC9zZWN0aW9uPlxyXG57L2lmfVxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmZldGNoZWRNZWV0dXBzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5mZXRjaGVkTWVldHVwcyB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZWV0dXAtY29udHJvbHMge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAubm8tbWVldHVwIHtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsibGluZWFyIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7O0FBNkRBLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzQjs7QUN0QkEsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBR0EsUUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ3pFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUMsSUFBSSxPQUFPO0FBQ1gsUUFBUSxLQUFLO0FBQ2IsUUFBUSxRQUFRO0FBQ2hCLFFBQVEsTUFBTTtBQUNkLFFBQVEsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDckMsS0FBSyxDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRSxNQUFNLEdBQUcsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ3JHLElBQUksTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsSUFBSSxNQUFNLGNBQWMsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7QUFDMUMsSUFBSSxNQUFNLFNBQVMsR0FBRyxLQUFL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
