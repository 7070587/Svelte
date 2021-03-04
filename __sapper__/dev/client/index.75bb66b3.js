import { i as identity, a as is_function, w as writable, S as SvelteComponentDev, b as init, s as safe_not_equal, d as dispatch_dev, c as create_slot, v as validate_slots, e as element, f as claim_element, g as children, h as detach_dev, j as attr_dev, k as add_location, l as insert_dev, u as update_slot, t as transition_in, m as add_render_callback, n as create_bidirectional_transition, o as transition_out, p as space, q as claim_space, r as append_dev, x as noop, y as globals, z as createEventDispatcher, A as text, B as create_component, C as claim_text, D as claim_component, E as mount_component, F as set_data_dev, G as destroy_component, H as group_outros, I as check_outros, J as toggle_class, K as listen_dev, L as run_all, M as bubble, N as prop_dev, O as prevent_default, P as onDestroy, Q as onMount, R as empty, T as query_selector_all, U as validate_each_argument, V as validate_each_keys, W as fix_position, X as add_transform, Y as create_animation, Z as update_keyed_each, _ as fix_and_outro_and_destroy_block } from './client.66a57266.js';
import { B as Button, E as ESelectMeetup, a as EInputType, b as EMeetupStatus } from './Button.13db3103.js';

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
				? /*buttonUnfavorite*/ ctx[4]
				: /*buttonFavorite*/ ctx[3],
				$$slots: { default: [create_default_slot_1$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button.$on("click", /*toggleFavorite*/ ctx[5]);

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
			? /*buttonUnfavorite*/ ctx[4]
			: /*buttonFavorite*/ ctx[3];

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
			add_location(span, file$5, 80, 12, 2860);
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

// (88:8) <Button button={buttonALink} on:click={showDetail}>
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
		source: "(88:8) <Button button={buttonALink} on:click={showDetail}>",
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
				button: /*buttonUnfavorite*/ ctx[4],
				$$slots: { default: [create_default_slot_2$1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button0.$on("click", /*editMeetup*/ ctx[7]);
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
				button: /*buttonALink*/ ctx[2],
				$$slots: { default: [create_default_slot$3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	button1.$on("click", /*showDetail*/ ctx[6]);

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
			add_location(h10, file$5, 57, 8, 2112);
			attr_dev(h2, "class", "text-overflow-ellipsis text-overflow-ellipsis-1 svelte-38nmm0");
			add_location(h2, file$5, 64, 8, 2305);
			attr_dev(h11, "class", "text-overflow-ellipsis text-overflow-ellipsis-1 svelte-38nmm0");
			add_location(h11, file$5, 65, 8, 2397);
			attr_dev(header, "class", "svelte-38nmm0");
			add_location(header, file$5, 56, 4, 2094);
			if (img.src !== (img_src_value = /*meetup*/ ctx[0].imageUrl)) attr_dev(img, "src", img_src_value);
			attr_dev(img, "alt", img_alt_value = /*meetup*/ ctx[0].title);
			attr_dev(img, "class", "svelte-38nmm0");
			add_location(img, file$5, 69, 8, 2530);
			attr_dev(div0, "class", "image svelte-38nmm0");
			add_location(div0, file$5, 68, 4, 2501);
			attr_dev(p, "class", "text-overflow-ellipsis text-overflow-ellipsis-2 svelte-38nmm0");
			add_location(p, file$5, 73, 8, 2629);
			attr_dev(div1, "class", "content svelte-38nmm0");
			add_location(div1, file$5, 72, 4, 2598);
			attr_dev(footer, "class", "svelte-38nmm0");
			add_location(footer, file$5, 76, 4, 2732);
			attr_dev(article, "class", "svelte-38nmm0");
			add_location(article, file$5, 55, 0, 2079);
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
	let buttonALink = { href: `${meetup.id}` };
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
		if ("buttonALink" in $$props) $$invalidate(2, buttonALink = $$props.buttonALink);
		if ("buttonFavorite" in $$props) $$invalidate(3, buttonFavorite = $$props.buttonFavorite);
		if ("buttonUnfavorite" in $$props) $$invalidate(4, buttonUnfavorite = $$props.buttonUnfavorite);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		meetup,
		isLoading,
		buttonALink,
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

// (137:0) {#if meetupStatus === EMeetupStatus.edit}
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
		source: "(137:0) {#if meetupStatus === EMeetupStatus.edit}",
		ctx
	});

	return block;
}

// (143:0) {:else}
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
			add_location(section0, file, 143, 4, 4954);
			attr_dev(section1, "class", "fetchedMeetups svelte-9kdday");
			add_location(section1, file, 153, 4, 5266);
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
		source: "(143:0) {:else}",
		ctx
	});

	return block;
}

// (141:0) {#if isLoadong}
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
		source: "(141:0) {#if isLoadong}",
		ctx
	});

	return block;
}

// (147:8) <Button on:click={clickNewMeetup}>
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
		source: "(147:8) <Button on:click={clickNewMeetup}>",
		ctx
	});

	return block;
}

// (150:4) {#if filteredMeetups.length === 0}
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
			add_location(p, file, 150, 8, 5171);
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
		source: "(150:4) {#if filteredMeetups.length === 0}",
		ctx
	});

	return block;
}

// (155:8) {#each filteredMeetups as meetup (meetup.id)}
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
			add_location(div, file, 155, 12, 5367);
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
		source: "(155:8) {#each filteredMeetups as meetup (meetup.id)}",
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

	// for spa
	onMount(() => {
		unsubscribe = meetupsStore.subscribe(item => {
			$$invalidate(9, loadedMeetups = item);
		});

		meetupsStore.setMeetup(fetchedMeetups.reverse());
	});

	// for static
	// $: filteredMeetups = isFavorite ? fetchedMeetups.filter((x: IMeetup.IMeetupItem) => x.isFavorite) : fetchedMeetups;
	// onMount(() => {
	//     meetups.setMeetup(fetchedMeetups.reverse());
	//     unsubscribe = meetups.subscribe((item: IMeetup.IMeetupItem[]) => {
	//         fetchedMeetups = item;
	//     });
	// });
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
			// for spa
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNzViYjY2YjMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvZWFzaW5nL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvdHJhbnNpdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2FuaW1hdGUvaW5kZXgubWpzIiwiLi4vLi4vLi4vc3JjL2hlbHBlci9nZW5lcmF0ZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXIvdmFsaWRhdGlvbi50cyIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvbWVldHVwLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvTWVldHVwcy9NZWV0dXBJdGVtLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL01lZXR1cHMvTWVldHVwRmlsdGVyLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1VJL1RleHRJbnB1dC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9VSS9Nb2RhbC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9NZWV0dXBzL0VkaXRNZWV0dXAuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9pbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgaWRlbnRpdHkgYXMgbGluZWFyIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuLypcbkFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2xcbkRpc3RyaWJ1dGVkIHVuZGVyIE1JVCBMaWNlbnNlIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGVzbC9lYXNlcy9ibG9iL21hc3Rlci9MSUNFTlNFLm1kXG4qL1xuZnVuY3Rpb24gYmFja0luT3V0KHQpIHtcbiAgICBjb25zdCBzID0gMS43MDE1OCAqIDEuNTI1O1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiAodCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKSk7XG4gICAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDIpO1xufVxuZnVuY3Rpb24gYmFja0luKHQpIHtcbiAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICByZXR1cm4gdCAqIHQgKiAoKHMgKyAxKSAqIHQgLSBzKTtcbn1cbmZ1bmN0aW9uIGJhY2tPdXQodCkge1xuICAgIGNvbnN0IHMgPSAxLjcwMTU4O1xuICAgIHJldHVybiAtLXQgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAxO1xufVxuZnVuY3Rpb24gYm91bmNlT3V0KHQpIHtcbiAgICBjb25zdCBhID0gNC4wIC8gMTEuMDtcbiAgICBjb25zdCBiID0gOC4wIC8gMTEuMDtcbiAgICBjb25zdCBjID0gOS4wIC8gMTAuMDtcbiAgICBjb25zdCBjYSA9IDQzNTYuMCAvIDM2MS4wO1xuICAgIGNvbnN0IGNiID0gMzU0NDIuMCAvIDE4MDUuMDtcbiAgICBjb25zdCBjYyA9IDE2MDYxLjAgLyAxODA1LjA7XG4gICAgY29uc3QgdDIgPSB0ICogdDtcbiAgICByZXR1cm4gdCA8IGFcbiAgICAgICAgPyA3LjU2MjUgKiB0MlxuICAgICAgICA6IHQgPCBiXG4gICAgICAgICAgICA/IDkuMDc1ICogdDIgLSA5LjkgKiB0ICsgMy40XG4gICAgICAgICAgICA6IHQgPCBjXG4gICAgICAgICAgICAgICAgPyBjYSAqIHQyIC0gY2IgKiB0ICsgY2NcbiAgICAgICAgICAgICAgICA6IDEwLjggKiB0ICogdCAtIDIwLjUyICogdCArIDEwLjcyO1xufVxuZnVuY3Rpb24gYm91bmNlSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gMC41ICogKDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0ICogMi4wKSlcbiAgICAgICAgOiAwLjUgKiBib3VuY2VPdXQodCAqIDIuMCAtIDEuMCkgKyAwLjU7XG59XG5mdW5jdGlvbiBib3VuY2VJbih0KSB7XG4gICAgcmV0dXJuIDEuMCAtIGJvdW5jZU91dCgxLjAgLSB0KTtcbn1cbmZ1bmN0aW9uIGNpcmNJbk91dCh0KSB7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpO1xufVxuZnVuY3Rpb24gY2lyY0luKHQpIHtcbiAgICByZXR1cm4gMS4wIC0gTWF0aC5zcXJ0KDEuMCAtIHQgKiB0KTtcbn1cbmZ1bmN0aW9uIGNpcmNPdXQodCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoMSAtIC0tdCAqIHQpO1xufVxuZnVuY3Rpb24gY3ViaWNJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjUgPyA0LjAgKiB0ICogdCAqIHQgOiAwLjUgKiBNYXRoLnBvdygyLjAgKiB0IC0gMi4wLCAzLjApICsgMS4wO1xufVxuZnVuY3Rpb24gY3ViaWNJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0ICogdDtcbn1cbmZ1bmN0aW9uIGN1YmljT3V0KHQpIHtcbiAgICBjb25zdCBmID0gdCAtIDEuMDtcbiAgICByZXR1cm4gZiAqIGYgKiBmICsgMS4wO1xufVxuZnVuY3Rpb24gZWxhc3RpY0luT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/IDAuNSAqXG4gICAgICAgICAgICBNYXRoLnNpbigoKCsxMy4wICogTWF0aC5QSSkgLyAyKSAqIDIuMCAqIHQpICpcbiAgICAgICAgICAgIE1hdGgucG93KDIuMCwgMTAuMCAqICgyLjAgKiB0IC0gMS4wKSlcbiAgICAgICAgOiAwLjUgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKCgtMTMuMCAqIE1hdGguUEkpIC8gMikgKiAoMi4wICogdCAtIDEuMCArIDEuMCkpICpcbiAgICAgICAgICAgIE1hdGgucG93KDIuMCwgLTEwLjAgKiAoMi4wICogdCAtIDEuMCkpICtcbiAgICAgICAgICAgIDEuMDtcbn1cbmZ1bmN0aW9uIGVsYXN0aWNJbih0KSB7XG4gICAgcmV0dXJuIE1hdGguc2luKCgxMy4wICogdCAqIE1hdGguUEkpIC8gMikgKiBNYXRoLnBvdygyLjAsIDEwLjAgKiAodCAtIDEuMCkpO1xufVxuZnVuY3Rpb24gZWxhc3RpY091dCh0KSB7XG4gICAgcmV0dXJuIChNYXRoLnNpbigoLTEzLjAgKiAodCArIDEuMCkgKiBNYXRoLlBJKSAvIDIpICogTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpICsgMS4wKTtcbn1cbmZ1bmN0aW9uIGV4cG9Jbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPT09IDAuMCB8fCB0ID09PSAxLjBcbiAgICAgICAgPyB0XG4gICAgICAgIDogdCA8IDAuNVxuICAgICAgICAgICAgPyArMC41ICogTWF0aC5wb3coMi4wLCAyMC4wICogdCAtIDEwLjApXG4gICAgICAgICAgICA6IC0wLjUgKiBNYXRoLnBvdygyLjAsIDEwLjAgLSB0ICogMjAuMCkgKyAxLjA7XG59XG5mdW5jdGlvbiBleHBvSW4odCkge1xuICAgIHJldHVybiB0ID09PSAwLjAgPyB0IDogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKTtcbn1cbmZ1bmN0aW9uIGV4cG9PdXQodCkge1xuICAgIHJldHVybiB0ID09PSAxLjAgPyB0IDogMS4wIC0gTWF0aC5wb3coMi4wLCAtMTAuMCAqIHQpO1xufVxuZnVuY3Rpb24gcXVhZEluT3V0KHQpIHtcbiAgICB0IC89IDAuNTtcbiAgICBpZiAodCA8IDEpXG4gICAgICAgIHJldHVybiAwLjUgKiB0ICogdDtcbiAgICB0LS07XG4gICAgcmV0dXJuIC0wLjUgKiAodCAqICh0IC0gMikgLSAxKTtcbn1cbmZ1bmN0aW9uIHF1YWRJbih0KSB7XG4gICAgcmV0dXJuIHQgKiB0O1xufVxuZnVuY3Rpb24gcXVhZE91dCh0KSB7XG4gICAgcmV0dXJuIC10ICogKHQgLSAyLjApO1xufVxuZnVuY3Rpb24gcXVhcnRJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyArOC4wICogTWF0aC5wb3codCwgNC4wKVxuICAgICAgICA6IC04LjAgKiBNYXRoLnBvdyh0IC0gMS4wLCA0LjApICsgMS4wO1xufVxuZnVuY3Rpb24gcXVhcnRJbih0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQsIDQuMCk7XG59XG5mdW5jdGlvbiBxdWFydE91dCh0KSB7XG4gICAgcmV0dXJuIE1hdGgucG93KHQgLSAxLjAsIDMuMCkgKiAoMS4wIC0gdCkgKyAxLjA7XG59XG5mdW5jdGlvbiBxdWludEluT3V0KHQpIHtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogdCAqIHQgKiB0ICogdCAqIHQ7XG4gICAgcmV0dXJuIDAuNSAqICgodCAtPSAyKSAqIHQgKiB0ICogdCAqIHQgKyAyKTtcbn1cbmZ1bmN0aW9uIHF1aW50SW4odCkge1xuICAgIHJldHVybiB0ICogdCAqIHQgKiB0ICogdDtcbn1cbmZ1bmN0aW9uIHF1aW50T3V0KHQpIHtcbiAgICByZXR1cm4gLS10ICogdCAqIHQgKiB0ICogdCArIDE7XG59XG5mdW5jdGlvbiBzaW5lSW5PdXQodCkge1xuICAgIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiB0KSAtIDEpO1xufVxuZnVuY3Rpb24gc2luZUluKHQpIHtcbiAgICBjb25zdCB2ID0gTWF0aC5jb3ModCAqIE1hdGguUEkgKiAwLjUpO1xuICAgIGlmIChNYXRoLmFicyh2KSA8IDFlLTE0KVxuICAgICAgICByZXR1cm4gMTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiAxIC0gdjtcbn1cbmZ1bmN0aW9uIHNpbmVPdXQodCkge1xuICAgIHJldHVybiBNYXRoLnNpbigodCAqIE1hdGguUEkpIC8gMik7XG59XG5cbmV4cG9ydCB7IGJhY2tJbiwgYmFja0luT3V0LCBiYWNrT3V0LCBib3VuY2VJbiwgYm91bmNlSW5PdXQsIGJvdW5jZU91dCwgY2lyY0luLCBjaXJjSW5PdXQsIGNpcmNPdXQsIGN1YmljSW4sIGN1YmljSW5PdXQsIGN1YmljT3V0LCBlbGFzdGljSW4sIGVsYXN0aWNJbk91dCwgZWxhc3RpY091dCwgZXhwb0luLCBleHBvSW5PdXQsIGV4cG9PdXQsIHF1YWRJbiwgcXVhZEluT3V0LCBxdWFkT3V0LCBxdWFydEluLCBxdWFydEluT3V0LCBxdWFydE91dCwgcXVpbnRJbiwgcXVpbnRJbk91dCwgcXVpbnRPdXQsIHNpbmVJbiwgc2luZUluT3V0LCBzaW5lT3V0IH07XG4iLCJpbXBvcnQgeyBjdWJpY0luT3V0LCBsaW5lYXIsIGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nL2luZGV4Lm1qcyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiwgYXNzaWduIH0gZnJvbSAnLi4vaW50ZXJuYWwvaW5kZXgubWpzJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbmZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxuXG5mdW5jdGlvbiBibHVyKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNJbk91dCwgYW1vdW50ID0gNSwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgZiA9IHN0eWxlLmZpbHRlciA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS5maWx0ZXI7XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgb3BhY2l0eTogJHt0YXJnZXRfb3BhY2l0eSAtIChvZCAqIHUpfTsgZmlsdGVyOiAke2Z9IGJsdXIoJHt1ICogYW1vdW50fXB4KTtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZhZGUobm9kZSwgeyBkZWxheSA9IDAsIGR1cmF0aW9uID0gNDAwLCBlYXNpbmcgPSBsaW5lYXIgfSA9IHt9KSB7XG4gICAgY29uc3QgbyA9ICtnZXRDb21wdXRlZFN0eWxlKG5vZGUpLm9wYWNpdHk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogdCA9PiBgb3BhY2l0eTogJHt0ICogb31gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGZseShub2RlLCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSA0MDAsIGVhc2luZyA9IGN1YmljT3V0LCB4ID0gMCwgeSA9IDAsIG9wYWNpdHkgPSAwIH0gPSB7fSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0YXJnZXRfb3BhY2l0eSA9ICtzdHlsZS5vcGFjaXR5O1xuICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgY29uc3Qgb2QgPSB0YXJnZXRfb3BhY2l0eSAqICgxIC0gb3BhY2l0eSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHRyYW5zbGF0ZSgkeygxIC0gdCkgKiB4fXB4LCAkeygxIC0gdCkgKiB5fXB4KTtcblx0XHRcdG9wYWNpdHk6ICR7dGFyZ2V0X29wYWNpdHkgLSAob2QgKiB1KX1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNsaWRlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICBjb25zdCBoZWlnaHQgPSBwYXJzZUZsb2F0KHN0eWxlLmhlaWdodCk7XG4gICAgY29uc3QgcGFkZGluZ190b3AgPSBwYXJzZUZsb2F0KHN0eWxlLnBhZGRpbmdUb3ApO1xuICAgIGNvbnN0IHBhZGRpbmdfYm90dG9tID0gcGFyc2VGbG9hdChzdHlsZS5wYWRkaW5nQm90dG9tKTtcbiAgICBjb25zdCBtYXJnaW5fdG9wID0gcGFyc2VGbG9hdChzdHlsZS5tYXJnaW5Ub3ApO1xuICAgIGNvbnN0IG1hcmdpbl9ib3R0b20gPSBwYXJzZUZsb2F0KHN0eWxlLm1hcmdpbkJvdHRvbSk7XG4gICAgY29uc3QgYm9yZGVyX3RvcF93aWR0aCA9IHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpO1xuICAgIGNvbnN0IGJvcmRlcl9ib3R0b21fd2lkdGggPSBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlckJvdHRvbVdpZHRoKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiB0ID0+ICdvdmVyZmxvdzogaGlkZGVuOycgK1xuICAgICAgICAgICAgYG9wYWNpdHk6ICR7TWF0aC5taW4odCAqIDIwLCAxKSAqIG9wYWNpdHl9O2AgK1xuICAgICAgICAgICAgYGhlaWdodDogJHt0ICogaGVpZ2h0fXB4O2AgK1xuICAgICAgICAgICAgYHBhZGRpbmctdG9wOiAke3QgKiBwYWRkaW5nX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBwYWRkaW5nLWJvdHRvbTogJHt0ICogcGFkZGluZ19ib3R0b219cHg7YCArXG4gICAgICAgICAgICBgbWFyZ2luLXRvcDogJHt0ICogbWFyZ2luX3RvcH1weDtgICtcbiAgICAgICAgICAgIGBtYXJnaW4tYm90dG9tOiAke3QgKiBtYXJnaW5fYm90dG9tfXB4O2AgK1xuICAgICAgICAgICAgYGJvcmRlci10b3Atd2lkdGg6ICR7dCAqIGJvcmRlcl90b3Bfd2lkdGh9cHg7YCArXG4gICAgICAgICAgICBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHt0ICogYm9yZGVyX2JvdHRvbV93aWR0aH1weDtgXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHNjYWxlKG5vZGUsIHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gY3ViaWNPdXQsIHN0YXJ0ID0gMCwgb3BhY2l0eSA9IDAgfSA9IHt9KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHRhcmdldF9vcGFjaXR5ID0gK3N0eWxlLm9wYWNpdHk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gc3R5bGUudHJhbnNmb3JtID09PSAnbm9uZScgPyAnJyA6IHN0eWxlLnRyYW5zZm9ybTtcbiAgICBjb25zdCBzZCA9IDEgLSBzdGFydDtcbiAgICBjb25zdCBvZCA9IHRhcmdldF9vcGFjaXR5ICogKDEgLSBvcGFjaXR5KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkZWxheSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVhc2luZyxcbiAgICAgICAgY3NzOiAoX3QsIHUpID0+IGBcblx0XHRcdHRyYW5zZm9ybTogJHt0cmFuc2Zvcm19IHNjYWxlKCR7MSAtIChzZCAqIHUpfSk7XG5cdFx0XHRvcGFjaXR5OiAke3RhcmdldF9vcGFjaXR5IC0gKG9kICogdSl9XG5cdFx0YFxuICAgIH07XG59XG5mdW5jdGlvbiBkcmF3KG5vZGUsIHsgZGVsYXkgPSAwLCBzcGVlZCwgZHVyYXRpb24sIGVhc2luZyA9IGN1YmljSW5PdXQgfSA9IHt9KSB7XG4gICAgY29uc3QgbGVuID0gbm9kZS5nZXRUb3RhbExlbmd0aCgpO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzcGVlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gbGVuIC8gc3BlZWQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGR1cmF0aW9uID0gZHVyYXRpb24obGVuKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKHQsIHUpID0+IGBzdHJva2UtZGFzaGFycmF5OiAke3QgKiBsZW59ICR7dSAqIGxlbn1gXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyb3NzZmFkZShfYSkge1xuICAgIHZhciB7IGZhbGxiYWNrIH0gPSBfYSwgZGVmYXVsdHMgPSBfX3Jlc3QoX2EsIFtcImZhbGxiYWNrXCJdKTtcbiAgICBjb25zdCB0b19yZWNlaXZlID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHRvX3NlbmQgPSBuZXcgTWFwKCk7XG4gICAgZnVuY3Rpb24gY3Jvc3NmYWRlKGZyb20sIG5vZGUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSBkID0+IE1hdGguc3FydChkKSAqIDMwLCBlYXNpbmcgPSBjdWJpY091dCB9ID0gYXNzaWduKGFzc2lnbih7fSwgZGVmYXVsdHMpLCBwYXJhbXMpO1xuICAgICAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGR4ID0gZnJvbS5sZWZ0IC0gdG8ubGVmdDtcbiAgICAgICAgY29uc3QgZHkgPSBmcm9tLnRvcCAtIHRvLnRvcDtcbiAgICAgICAgY29uc3QgZHcgPSBmcm9tLndpZHRoIC8gdG8ud2lkdGg7XG4gICAgICAgIGNvbnN0IGRoID0gZnJvbS5oZWlnaHQgLyB0by5oZWlnaHQ7XG4gICAgICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybSA9IHN0eWxlLnRyYW5zZm9ybSA9PT0gJ25vbmUnID8gJycgOiBzdHlsZS50cmFuc2Zvcm07XG4gICAgICAgIGNvbnN0IG9wYWNpdHkgPSArc3R5bGUub3BhY2l0eTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRlbGF5LFxuICAgICAgICAgICAgZHVyYXRpb246IGlzX2Z1bmN0aW9uKGR1cmF0aW9uKSA/IGR1cmF0aW9uKGQpIDogZHVyYXRpb24sXG4gICAgICAgICAgICBlYXNpbmcsXG4gICAgICAgICAgICBjc3M6ICh0LCB1KSA9PiBgXG5cdFx0XHRcdG9wYWNpdHk6ICR7dCAqIG9wYWNpdHl9O1xuXHRcdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcblx0XHRcdFx0dHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCR7dSAqIGR5fXB4KSBzY2FsZSgke3QgKyAoMSAtIHQpICogZHd9LCAke3QgKyAoMSAtIHQpICogZGh9KTtcblx0XHRcdGBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdHJhbnNpdGlvbihpdGVtcywgY291bnRlcnBhcnRzLCBpbnRybykge1xuICAgICAgICByZXR1cm4gKG5vZGUsIHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgaXRlbXMuc2V0KHBhcmFtcy5rZXksIHtcbiAgICAgICAgICAgICAgICByZWN0OiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJwYXJ0cy5oYXMocGFyYW1zLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyByZWN0IH0gPSBjb3VudGVycGFydHMuZ2V0KHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVycGFydHMuZGVsZXRlKHBhcmFtcy5rZXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY3Jvc3NmYWRlKHJlY3QsIG5vZGUsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBub2RlIGlzIGRpc2FwcGVhcmluZyBhbHRvZ2V0aGVyXG4gICAgICAgICAgICAgICAgLy8gKGkuZS4gd2Fzbid0IGNsYWltZWQgYnkgdGhlIG90aGVyIGxpc3QpXG4gICAgICAgICAgICAgICAgLy8gdGhlbiB3ZSBuZWVkIHRvIHN1cHBseSBhbiBvdXRyb1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZShwYXJhbXMua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsbGJhY2sgJiYgZmFsbGJhY2sobm9kZSwgcGFyYW1zLCBpbnRybyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgICB0cmFuc2l0aW9uKHRvX3NlbmQsIHRvX3JlY2VpdmUsIGZhbHNlKSxcbiAgICAgICAgdHJhbnNpdGlvbih0b19yZWNlaXZlLCB0b19zZW5kLCB0cnVlKVxuICAgIF07XG59XG5cbmV4cG9ydCB7IGJsdXIsIGNyb3NzZmFkZSwgZHJhdywgZmFkZSwgZmx5LCBzY2FsZSwgc2xpZGUgfTtcbiIsImltcG9ydCB7IGN1YmljT3V0IH0gZnJvbSAnLi4vZWFzaW5nL2luZGV4Lm1qcyc7XG5pbXBvcnQgeyBpc19mdW5jdGlvbiB9IGZyb20gJy4uL2ludGVybmFsL2luZGV4Lm1qcyc7XG5cbmZ1bmN0aW9uIGZsaXAobm9kZSwgYW5pbWF0aW9uLCBwYXJhbXMgPSB7fSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgIGNvbnN0IHNjYWxlWCA9IGFuaW1hdGlvbi5mcm9tLndpZHRoIC8gbm9kZS5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBzY2FsZVkgPSBhbmltYXRpb24uZnJvbS5oZWlnaHQgLyBub2RlLmNsaWVudEhlaWdodDtcbiAgICBjb25zdCBkeCA9IChhbmltYXRpb24uZnJvbS5sZWZ0IC0gYW5pbWF0aW9uLnRvLmxlZnQpIC8gc2NhbGVYO1xuICAgIGNvbnN0IGR5ID0gKGFuaW1hdGlvbi5mcm9tLnRvcCAtIGFuaW1hdGlvbi50by50b3ApIC8gc2NhbGVZO1xuICAgIGNvbnN0IGQgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IChkKSA9PiBNYXRoLnNxcnQoZCkgKiAxMjAsIGVhc2luZyA9IGN1YmljT3V0IH0gPSBwYXJhbXM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGVsYXksXG4gICAgICAgIGR1cmF0aW9uOiBpc19mdW5jdGlvbihkdXJhdGlvbikgPyBkdXJhdGlvbihkKSA6IGR1cmF0aW9uLFxuICAgICAgICBlYXNpbmcsXG4gICAgICAgIGNzczogKF90LCB1KSA9PiBgdHJhbnNmb3JtOiAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7dSAqIGR4fXB4LCAke3UgKiBkeX1weCk7YFxuICAgIH07XG59XG5cbmV4cG9ydCB7IGZsaXAgfTtcbiIsbnVsbCxudWxsLG51bGwsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xyXG5cclxuICAgIGltcG9ydCBtZWV0dXBzIGZyb20gJy4uLy4uL3N0b3Jlcy9tZWV0dXAnO1xyXG5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uLy4uL21vZGFscyc7XHJcblxyXG4gICAgaW1wb3J0IEJ1dHRvbiBmcm9tICcuLy4uL1VJL0J1dHRvbi5zdmVsdGUnO1xyXG4gICAgaW1wb3J0IEJhZGdlIGZyb20gJy4vLi4vVUkvQmFkZ2Uuc3ZlbHRlJztcclxuICAgIGltcG9ydCBMb2FkaW5nIGZyb20gJy4vLi4vVUkvTG9hZGluZy5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBleHBvcnQgbGV0IG1lZXR1cDogSU1lZXR1cC5JTWVldHVwSXRlbTtcclxuXHJcbiAgICBsZXQgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgbGV0IGJ1dHRvbkFMaW5rOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgaHJlZjogYCR7bWVldHVwLmlkfWAsXHJcbiAgICB9O1xyXG5cclxuICAgIGxldCBidXR0b25GYXZvcml0ZTogSU1lZXR1cC5JQnV0dG9uID0ge1xyXG4gICAgICAgIG1vZGU6ICdvdXRsaW5lJyxcclxuICAgICAgICBjb2xvcjogJ3N1Y2Nlc3MnLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYnV0dG9uVW5mYXZvcml0ZTogSU1lZXR1cC5JQnV0dG9uID0ge1xyXG4gICAgICAgIG1vZGU6ICdvdXRsaW5lJyxcclxuICAgIH07XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gdG9nZ2xlRmF2b3JpdGUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gaWYgKG1lZXR1cC5pZCkgZGVsZXRlIG1lZXR1cC5pZDtcclxuICAgICAgICBtZWV0dXAuaXNGYXZvcml0ZSA9ICFtZWV0dXAuaXNGYXZvcml0ZTtcclxuICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IGZldGNoKGBodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy8ke21lZXR1cC5pZH0uanNvbmAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZWV0dXApLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGlzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FuIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuICAgICAgICBpc0xvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbWVldHVwcy50b2dnbGVGYXZvcml0ZShtZWV0dXApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNob3dEZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3Nob3ctZGV0YWlsJywgbWVldHVwLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBlZGl0TWVldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIGRpc3BhdGNoKCdlZGl0LW1lZXR1cCcsIG1lZXR1cC5pZCk7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPGFydGljbGU+XHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxoMT5cclxuICAgICAgICAgICAge21lZXR1cC50aXRsZX1cclxuICAgICAgICAgICAgeyNpZiBtZWV0dXAuaXNGYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgIHttZWV0dXAuaXNGYXZvcml0ZX1cclxuICAgICAgICAgICAgICAgIDxCYWRnZT7inaQgRmF2b3JpdGU8L0JhZGdlPlxyXG4gICAgICAgICAgICB7L2lmfVxyXG4gICAgICAgIDwvaDE+XHJcbiAgICAgICAgPGgyIGNsYXNzPVwidGV4dC1vdmVyZmxvdy1lbGxpcHNpcyB0ZXh0LW92ZXJmbG93LWVsbGlwc2lzLTFcIj57bWVldHVwLnN1YlRpdGxlfTwvaDI+XHJcbiAgICAgICAgPGgxIGNsYXNzPVwidGV4dC1vdmVyZmxvdy1lbGxpcHNpcyB0ZXh0LW92ZXJmbG93LWVsbGlwc2lzLTFcIj57bWVldHVwLmFkZHJlc3N9PC9oMT5cclxuICAgIDwvaGVhZGVyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJpbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPXttZWV0dXAuaW1hZ2VVcmx9IGFsdD17bWVldHVwLnRpdGxlfSAvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHQtb3ZlcmZsb3ctZWxsaXBzaXMgdGV4dC1vdmVyZmxvdy1lbGxpcHNpcy0yXCI+e21lZXR1cC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uPXtidXR0b25VbmZhdm9yaXRlfSBvbjpjbGljaz17ZWRpdE1lZXR1cH0+RWRpdDwvQnV0dG9uPlxyXG5cclxuICAgICAgICB7I2lmIGlzTG9hZGluZ31cclxuICAgICAgICAgICAgPHNwYW4+IENoYW5naW5nLi4uICZlbnNwOyZlbnNwOzwvc3Bhbj5cclxuICAgICAgICB7OmVsc2V9XHJcbiAgICAgICAgICAgIDxCdXR0b24gYnV0dG9uPXttZWV0dXAuaXNGYXZvcml0ZSA/IGJ1dHRvblVuZmF2b3JpdGUgOiBidXR0b25GYXZvcml0ZX0gb246Y2xpY2s9e3RvZ2dsZUZhdm9yaXRlfT5cclxuICAgICAgICAgICAgICAgIHttZWV0dXAuaXNGYXZvcml0ZSA/ICdVbmZhdm9yaXRlJyA6ICdGYXZvcml0ZSd9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIHsvaWZ9XHJcblxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uPXtidXR0b25BTGlua30gb246Y2xpY2s9e3Nob3dEZXRhaWx9PlNob3cgRGV0YWlsPC9CdXR0b24+XHJcbiAgICA8L2Zvb3Rlcj5cclxuPC9hcnRpY2xlPlxyXG5cclxuPHN0eWxlPlxyXG4gICAgYXJ0aWNsZSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG5cclxuICAgICAgICAudGV4dC1vdmVyZmxvdy1lbGxpcHNpcyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94OyAvKiDlsIflsI3lg4/kvZzngrrlvYjmgKfkvLjnuK7nm5LmqKHlnovpoa/npLogKi9cclxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgLyog6Kit572u5oiW5qqi5p+l5Ly457iu55uS5bCN5YOP55qE5a2Q5YWD57Sg55qE5o6S5YiX5pa55byPICovXHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyAvKiAg5Zyo5aSa6KGM5paH5pys55qE5oOF5rOB5LiL77yM55SoLi4u6Zqx6JeP6LaF5Ye656+E5ZyN55qE5paH5pysICovXHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LW92ZXJmbG93LWVsbGlwc2lzLTEge1xyXG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIOeUqOS+humZkOWItuWcqOS4gOWAi+WhiuWFg+e0oOmhr+ekuueahOaWh+acrOeahOihjOaVuCAqL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtb3ZlcmZsb3ctZWxsaXBzaXMtMiB7XHJcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjsgLyog55So5L6G6ZmQ5Yi25Zyo5LiA5YCL5aGK5YWD57Sg6aGv56S655qE5paH5pys55qE6KGM5pW4ICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgLmNvbnRlbnQsXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDEuaXMtZmF2b3JpdGUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDFhMTI5O1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgY29sb3I6ICM4MDgwODA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XHJcbiAgICBpbXBvcnQgeyBFU2VsZWN0TWVldHVwIH0gZnJvbSAnLi4vLi4vZW51bXMvbWVldHVwJztcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaDogKG5hbWU6IHN0cmluZywgZGV0YWlsPzogYW55KSA9PiB2b2lkID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4gICAgbGV0IHNlbGVjdGVkQnV0dG9uOiBFU2VsZWN0TWVldHVwID0gRVNlbGVjdE1lZXR1cC5hbGw7XHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0QWxsKCk6IHZvaWQge1xyXG4gICAgICAgIHNlbGVjdGVkQnV0dG9uID0gRVNlbGVjdE1lZXR1cC5hbGw7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NlbGVjdCcsIEVTZWxlY3RNZWV0dXAuYWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RGYXZvcml0ZXMoKTogdm9pZCB7XHJcbiAgICAgICAgc2VsZWN0ZWRCdXR0b24gPSBFU2VsZWN0TWVldHVwLmZhdm9yaXRlO1xyXG4gICAgICAgIGRpc3BhdGNoKCdzZWxlY3QnLCBFU2VsZWN0TWVldHVwLmZhdm9yaXRlKTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2PlxyXG4gICAgPGJ1dHRvbiBjbGFzczphY3RpdmU9e3NlbGVjdGVkQnV0dG9uID09PSBFU2VsZWN0TWVldHVwLmFsbH0gb246Y2xpY2s9e3NlbGVjdEFsbH0+QWxsPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIGNsYXNzOmFjdGl2ZT17c2VsZWN0ZWRCdXR0b24gPT09IEVTZWxlY3RNZWV0dXAuZmF2b3JpdGV9IG9uOmNsaWNrPXtzZWxlY3RGYXZvcml0ZXN9PkZhdm9yaXRlczwvYnV0dG9uPlxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuICAgIGRpdiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhYWFhO1xyXG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWFhYWFhO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbjpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmhvdmVyLFxyXG4gICAgYnV0dG9uOmFjdGl2ZSxcclxuICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvck1haW47XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3JNYWluO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwiPHNjcmlwdD5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uLy4uL21vZGFscyc7XHJcbiAgICBpbXBvcnQgeyBFSW5wdXRUeXBlIH0gZnJvbSAnLi4vLi4vZW51bXMvbWVldHVwJztcclxuXHJcbiAgICBleHBvcnQgbGV0IHRleHRJbnB1dDogSU1lZXR1cC5JVGV4dElucHV0ID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgdHlwZTogRUlucHV0VHlwZS50ZXh0LFxyXG4gICAgICAgIHJvd3M6IDMsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG5cclxuICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgICB2YWxpZE1lc3NhZ2U6ICcnLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgaXNGb2N1czogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIGZvY3VzU3RhdHVzKCk6IHZvaWQge1xyXG4gICAgICAgIGlzRm9jdXMgPSB0cnVlO1xyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIj5cclxuICAgIDxsYWJlbCBmb3I9e3RleHRJbnB1dC5pZH0+e3RleHRJbnB1dC5sYWJlbH08L2xhYmVsPlxyXG4gICAgeyNpZiB0ZXh0SW5wdXQudHlwZSA9PT0gRUlucHV0VHlwZS50ZXh0YXJlYX1cclxuICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgY2xhc3M6aW52YWxpZD17IXRleHRJbnB1dC52YWxpZCAmJiBpc0ZvY3VzfVxyXG4gICAgICAgICAgICByb3dzPXt0ZXh0SW5wdXQucm93c31cclxuICAgICAgICAgICAgaWQ9e3RleHRJbnB1dC5pZH1cclxuICAgICAgICAgICAgdmFsdWU9e3RleHRJbnB1dC52YWx1ZX1cclxuICAgICAgICAgICAgb246aW5wdXRcclxuICAgICAgICAgICAgb246Ymx1cj17Zm9jdXNTdGF0dXN9XHJcbiAgICAgICAgLz5cclxuICAgIHs6ZWxzZX1cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3M6aW52YWxpZD17IXRleHRJbnB1dC52YWxpZCAmJiBpc0ZvY3VzfVxyXG4gICAgICAgICAgICB0eXBlPXt0ZXh0SW5wdXQudHlwZX1cclxuICAgICAgICAgICAgaWQ9e3RleHRJbnB1dC5pZH1cclxuICAgICAgICAgICAgdmFsdWU9e3RleHRJbnB1dC52YWx1ZX1cclxuICAgICAgICAgICAgb246aW5wdXRcclxuICAgICAgICAgICAgb246Ymx1cj17Zm9jdXNTdGF0dXN9XHJcbiAgICAgICAgLz5cclxuICAgIHsvaWZ9XHJcblxyXG4gICAgeyNpZiB0ZXh0SW5wdXQudmFsaWRNZXNzYWdlICYmICF0ZXh0SW5wdXQudmFsaWQgJiYgaXNGb2N1c31cclxuICAgICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj57dGV4dElucHV0LnZhbGlkTWVzc2FnZX08L3A+XHJcbiAgICB7L2lmfVxyXG48L2Rpdj5cclxuXHJcbjxzdHlsZT5cclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMC4yNXJlbSAwO1xyXG5cclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwLjE1cmVtIDAuMjVyZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjFzIGVhc2Utb3V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlNDA3NjM7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludmFsaWQge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZTNlMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcclxuICAgIGltcG9ydCB7IGZseSwgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcclxuXHJcbiAgICBpbXBvcnQgdHlwZSB7IElNZWV0dXAgfSBmcm9tICcuLi9tb2RhbHMnO1xyXG5cclxuICAgIGltcG9ydCBCdXR0b24gZnJvbSAnLi9CdXR0b24uc3ZlbHRlJztcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaDogKG5hbWU6IHN0cmluZywgZGV0YWlsPzogYW55KSA9PiB2b2lkID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4gICAgZXhwb3J0IGxldCBtb2RhbFRpdGxlOiBzdHJpbmc7XHJcblxyXG4gICAgbGV0IGZseVRyYW5zaXRpb246IElNZWV0dXAuSUZseVBhcmFtcyA9IHtcclxuICAgICAgICB5OiAzMDAsXHJcbiAgICAgICAgZHVyYXRpb246IDY1MCxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCgpOiB2b2lkIHtcclxuICAgICAgICBkaXNwYXRjaCgnY2xvc2UtbW9kYWwnKTtcclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48ZGl2IHRyYW5zaXRpb246ZmFkZSBjbGFzcz1cIm1vZGFsLWJhY2tkcm9wXCIgb246Y2xpY2s9e2Nsb3NlTW9kYWx9IC8+XHJcbjxkaXYgdHJhbnNpdGlvbjpmbHk9e2ZseVRyYW5zaXRpb259IGNsYXNzPVwibW9kYWxcIj5cclxuICAgIDxoMT57bW9kYWxUaXRsZX08L2gxPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICA8c2xvdCAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17Y2xvc2VNb2RhbH0+Q2xvc2U8L0J1dHRvbj5cclxuICAgICAgICA8L3Nsb3Q+XHJcbiAgICA8L2Zvb3Rlcj5cclxuPC9kaXY+XHJcblxyXG48c3R5bGU+XHJcbiAgICAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XHJcbiAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAxMHZoO1xyXG4gICAgICAgIGxlZnQ6IDEwJTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIFNsYWInLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHJlbTtcclxuICAgICAgICAgICAgbGVmdDogY2FsYyg1MCUgLSAyMHJlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0PlxyXG4gICAgaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcclxuICAgIGltcG9ydCBtZWV0dXBzIGZyb20gJy4uLy4uL3N0b3Jlcy9tZWV0dXAnO1xyXG5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uLy4uL21vZGFscyc7XHJcbiAgICBpbXBvcnQgeyBFSW5wdXRUeXBlIH0gZnJvbSAnLi4vLi4vZW51bXMvbWVldHVwJztcclxuICAgIGltcG9ydCB7IFNlcnZpY2VWYWxpZGF0aW9uLCBTZXJ2aWNlR2VuZXJhdGUgfSBmcm9tICcuLi8uLi9oZWxwZXInO1xyXG5cclxuICAgIGltcG9ydCBUZXh0SW5wdXQgZnJvbSAnLi8uLi9VSS9UZXh0SW5wdXQuc3ZlbHRlJztcclxuICAgIGltcG9ydCBCdXR0b24gZnJvbSAnLi8uLi9VSS9CdXR0b24uc3ZlbHRlJztcclxuICAgIGltcG9ydCBNb2RhbHMgZnJvbSAnLi4vVUkvTW9kYWwuc3ZlbHRlJztcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaDogKG5hbWU6IHN0cmluZywgZGV0YWlsPzogYW55KSA9PiB2b2lkID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XHJcblxyXG4gICAgbGV0IG1lZXR1cDogSU1lZXR1cC5JTWVldHVwSXRlbSA9IHtcclxuICAgICAgICAvLyBpZDogU2VydmljZUdlbmVyYXRlLnJhbmRvbUlkKCksXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIHN1YlRpdGxlOiAnJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJycsXHJcbiAgICAgICAgaW1hZ2VVcmw6ICcnLFxyXG4gICAgICAgIGFkZHJlc3M6ICcnLFxyXG4gICAgICAgIGNvbnRhY3RFbWFpbDogJycsXHJcbiAgICAgICAgaXNGYXZvcml0ZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIGV4cG9ydCBsZXQgaWQ6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgaWYgKGlkKSB7XHJcbiAgICAgICAgY29uc3QgdW5zdWJzY3JpYmUgPSBtZWV0dXBzLnN1YnNjcmliZSgoaXRlbXMpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRNZWV0dXA6IElNZWV0dXAuSU1lZXR1cEl0ZW0gPSBpdGVtcy5maW5kKCh4KSA9PiB4LmlkID09PSBpZCk7XHJcbiAgICAgICAgICAgIG1lZXR1cCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWRNZWV0dXApKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0aXRsZUlucHV0OiBJTWVldHVwLklUZXh0SW5wdXQgPSB7XHJcbiAgICAgICAgaWQ6ICd0aXRsZScsXHJcbiAgICAgICAgbGFiZWw6ICdUaXRsZScsXHJcbiAgICAgICAgdmFsdWU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgdGl0bGUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdWJUaXRsZUlucHV0OiBJTWVldHVwLklUZXh0SW5wdXQgPSB7XHJcbiAgICAgICAgaWQ6ICdzdWJUaXRsZScsXHJcbiAgICAgICAgbGFiZWw6ICdTdWIgVGl0bGUnLFxyXG4gICAgICAgIHZhbHVlOiBtZWV0dXAuc3ViVGl0bGUsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIHN1YiB0aXRsZScsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGFkZHJlc3NJbnB1dDogSU1lZXR1cC5JVGV4dElucHV0ID0ge1xyXG4gICAgICAgIGlkOiAnYWRkcmVzcycsXHJcbiAgICAgICAgbGFiZWw6ICdBZGRyZXNzJyxcclxuICAgICAgICB2YWx1ZTogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGFkZHJlc3MnLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBpbWFnZVVybElucHV0OiBJTWVldHVwLklUZXh0SW5wdXQgPSB7XHJcbiAgICAgICAgaWQ6ICdpbWFnZVVybCcsXHJcbiAgICAgICAgbGFiZWw6ICdJbWFnZSBVcmwnLFxyXG4gICAgICAgIHZhbHVlOiBtZWV0dXAuaW1hZ2VVcmwsXHJcbiAgICAgICAgdmFsaWQ6IGZhbHNlLFxyXG4gICAgICAgIHZhbGlkTWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGltYWdlIHVybCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RFbWFpbElucHV0OiBJTWVldHVwLklUZXh0SW5wdXQgPSB7XHJcbiAgICAgICAgaWQ6ICdjb250YWN0RW1haWwnLFxyXG4gICAgICAgIGxhYmVsOiAnQ29udGFjdCBFbWFpbCcsXHJcbiAgICAgICAgdHlwZTogRUlucHV0VHlwZS5lbWFpbCxcclxuICAgICAgICB2YWx1ZTogbWVldHVwLmNvbnRhY3RFbWFpbCxcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgY29udGFjdCBlbWFpbCcsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5wdXQ6IElNZWV0dXAuSVRleHRJbnB1dCA9IHtcclxuICAgICAgICBpZDogJ2Rlc2NyaXB0aW9uJyxcclxuICAgICAgICBsYWJlbDogJ0Rlc2NyaXB0aW9uJyxcclxuICAgICAgICB0eXBlOiBFSW5wdXRUeXBlLnRleHRhcmVhLFxyXG4gICAgICAgIHJvd3M6IDMsXHJcbiAgICAgICAgdmFsdWU6IG1lZXR1cC5kZXNjcmlwdGlvbixcclxuICAgICAgICB2YWxpZDogZmFsc2UsXHJcbiAgICAgICAgdmFsaWRNZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZGVzY3JpcHRpb24nLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgYnV0dG9uQ2FuY2VsOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgbW9kZTogJ291dGxpbmUnLFxyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgbW9kYWxUaXRsZTogc3RyaW5nID0gaWQgPyAnRWRpdCBNZWV0dXAnIDogJ0NyZWF0ZSBOZXcgTWVldHVwJztcclxuXHJcbiAgICBsZXQgaXNGb3JtVmFsaWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvLyB3YXRjaCB2YWx1ZSwgaWYgdmFsdWUgY2hhbmdlIHVwZGF0ZSBVSVxyXG4gICAgJDogdGl0bGVJbnB1dC52YWxpZCA9ICFTZXJ2aWNlVmFsaWRhdGlvbi5pc0VtcHR5KG1lZXR1cC50aXRsZSk7XHJcbiAgICAkOiBzdWJUaXRsZUlucHV0LnZhbGlkID0gIVNlcnZpY2VWYWxpZGF0aW9uLmlzRW1wdHkobWVldHVwLnN1YlRpdGxlKTtcclxuICAgICQ6IGFkZHJlc3NJbnB1dC52YWxpZCA9ICFTZXJ2aWNlVmFsaWRhdGlvbi5pc0VtcHR5KG1lZXR1cC5hZGRyZXNzKTtcclxuICAgICQ6IGltYWdlVXJsSW5wdXQudmFsaWQgPSBTZXJ2aWNlVmFsaWRhdGlvbi5pc0ltYWdlKG1lZXR1cC5pbWFnZVVybCk7XHJcbiAgICAkOiBjb250YWN0RW1haWxJbnB1dC52YWxpZCA9IFNlcnZpY2VWYWxpZGF0aW9uLmlzRW1haWwobWVldHVwLmNvbnRhY3RFbWFpbCk7XHJcbiAgICAkOiBkZXNjcmlwdGlvbklucHV0LnZhbGlkID0gIVNlcnZpY2VWYWxpZGF0aW9uLmlzRW1wdHkobWVldHVwLmRlc2NyaXB0aW9uKTtcclxuICAgICQ6IGlzRm9ybVZhbGlkID1cclxuICAgICAgICB0aXRsZUlucHV0LnZhbGlkICYmIHN1YlRpdGxlSW5wdXQudmFsaWQgJiYgYWRkcmVzc0lucHV0LnZhbGlkICYmIGltYWdlVXJsSW5wdXQudmFsaWQgJiYgY29udGFjdEVtYWlsSW5wdXQudmFsaWQgJiYgZGVzY3JpcHRpb25JbnB1dC52YWxpZDtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUaXRsZShlKTogdm9pZCB7XHJcbiAgICAgICAgbWVldHVwLnRpdGxlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU3ViVGl0bGUoZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbWVldHVwLnN1YlRpdGxlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkcmVzcyhlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBtZWV0dXAuYWRkcmVzcyA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUltYWdlVXJsKGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cC5pbWFnZVVybCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNvbnRhY3RFbWFpbChlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBtZWV0dXAuY29udGFjdEVtYWlsID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlRGVzY3JpcHRpb24oZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgbWVldHVwLmRlc2NyaXB0aW9uID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2F2ZU1lZXR1cCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICAvLyBjb25zdCBtZWV0dXBEYXRhOiBJTWVldHVwLklNZWV0dXBJdGVtID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZWV0dXApKTtcclxuICAgICAgICBjb25zdCBtZWV0dXBEYXRhOiBJTWVldHVwLklNZWV0dXBJdGVtID0gbWVldHVwO1xyXG5cclxuICAgICAgICAvLyBlZGl0IG1vZGVcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgaWYgKG1lZXR1cERhdGEuaWQpIGRlbGV0ZSBtZWV0dXBEYXRhLmlkO1xyXG4gICAgICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IGZldGNoKGBodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy8ke2lkfS5qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobWVldHVwRGF0YSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzLm9rKSB0aHJvdyBuZXcgRXJyb3IoJ0FuIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuXHJcbiAgICAgICAgICAgIG1lZXR1cHMudXBkYXRlTWVldHVwKGlkLCBtZWV0dXBEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCByZXM6IGFueSA9IGF3YWl0IGZldGNoKCdodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy5qc29uJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtZWV0dXBEYXRhKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKGVycikpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRhdGE6IHsgbmFtZTogc3RyaW5nIH0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhLmlkID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICBtZWV0dXBzLnNhdmVNZWV0dXAobWVldHVwRGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnbWVldHVwRGF0YSA9PiAnLCBtZWV0dXBEYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKCdzYXZlLWRhdGEnLCBtZWV0dXApO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsb3NlTW9kYWwoKTogdm9pZCB7XHJcbiAgICAgICAgZGlzcGF0Y2goJ2Nsb3NlLW1vZGFsJyk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZGVsZXRlTWVldHVwKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIGNvbnN0IHJlczogYW55ID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vc3ZlbHRlLW1lZXVwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9tZWV0dXBzLyR7aWR9Lmpzb25gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJlZCwgcGxlYXNlIHRyeSBhZ2FpbicpO1xyXG5cclxuICAgICAgICBtZWV0dXBzLmRlbGV0ZU1lZXR1cChpZCk7XHJcbiAgICAgICAgZGlzcGF0Y2goJ3NhdmUtZGF0YScsIG1lZXR1cCk7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPE1vZGFscyB7bW9kYWxUaXRsZX0gb246Y2xvc2UtbW9kYWw+XHJcbiAgICA8Zm9ybSBvbjpzdWJtaXR8cHJldmVudERlZmF1bHQ9e3NhdmVNZWV0dXB9PlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdGV4dElucHV0PXt0aXRsZUlucHV0fSBvbjppbnB1dD17aGFuZGxlVGl0bGV9IC8+XHJcbiAgICAgICAgPFRleHRJbnB1dCB0ZXh0SW5wdXQ9e3N1YlRpdGxlSW5wdXR9IG9uOmlucHV0PXtoYW5kbGVTdWJUaXRsZX0gLz5cclxuICAgICAgICA8VGV4dElucHV0IHRleHRJbnB1dD17YWRkcmVzc0lucHV0fSBvbjppbnB1dD17aGFuZGxlQWRkcmVzc30gLz5cclxuICAgICAgICA8VGV4dElucHV0IHRleHRJbnB1dD17aW1hZ2VVcmxJbnB1dH0gb246aW5wdXQ9e2hhbmRsZUltYWdlVXJsfSAvPlxyXG4gICAgICAgIDxUZXh0SW5wdXQgdGV4dElucHV0PXtjb250YWN0RW1haWxJbnB1dH0gb246aW5wdXQ9e2hhbmRsZUNvbnRhY3RFbWFpbH0gLz5cclxuICAgICAgICA8VGV4dElucHV0IHRleHRJbnB1dD17ZGVzY3JpcHRpb25JbnB1dH0gb246aW5wdXQ9e2hhbmRsZURlc2NyaXB0aW9ufSAvPlxyXG4gICAgPC9mb3JtPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJidXR0b25cIiBzbG90PVwiZm9vdGVyXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17c2F2ZU1lZXR1cH0gZGlzYWJsZWQ9eyFpc0Zvcm1WYWxpZH0+U2F2ZTwvQnV0dG9uPlxyXG5cclxuICAgICAgICB7I2lmIGlkfVxyXG4gICAgICAgICAgICA8QnV0dG9uIG9uOmNsaWNrPXtkZWxldGVNZWV0dXB9PkRlbGV0ZTwvQnV0dG9uPlxyXG4gICAgICAgIHsvaWZ9XHJcblxyXG4gICAgICAgIDxCdXR0b24gYnV0dG9uPXtidXR0b25DYW5jZWx9IG9uOmNsaWNrPXtjbG9zZU1vZGFsfT5DYW5jZWw8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L01vZGFscz5cclxuXHJcbjxzdHlsZT5cclxuICAgIGZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cclxuICAgIGltcG9ydCB0eXBlIHsgSU1lZXR1cCB9IGZyb20gJy4uL21vZGFscyc7XHJcblxyXG4gICAgbGV0IGlzTG9hZG9uZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBpZDogc3RyaW5nO1xyXG4gICAgbGV0IGVycm9yTWVzc2FnZTogc3RyaW5nID0gJyc7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQocGFnZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3BhZ2UgPT4gJywgcGFnZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmZldGNoKCdodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy5qc29uJylcclxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZldGNoaW5nIG1lZXR1cHMgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluIGxhdGVyIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZXRjaGVkTWVldHVwczogSU1lZXR1cC5JTWVldHVwSXRlbVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hlZE1lZXR1cHMucHVzaCh7IC4uLmRhdGFba2V5XSwgaWQ6IGtleSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBmZXRjaGVkTWVldHVwczogZmV0Y2hlZE1lZXR1cHMgfTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGlzTG9hZG9uZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyID8/IGVycm9yTWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoNTAwLCAnQ291bGQgbm90IGZldGNoIG1lZXR1cHMnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbm8gdXNlLCBmb3Igbm93ICBub3Qga25vdyByZWFzb25cclxuICAgIC8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdwYWdlID0+ICcsIHBhZ2UpO1xyXG5cclxuICAgIC8vICAgICBsZXQgcmVzOiBhbnkgPSBhd2FpdCB0aGlzLmZldGNoKCdodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy5qc29uJykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICBpc0xvYWRvbmcgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgZXJyb3JNZXNzYWdlID0gZXJyO1xyXG4gICAgLy8gICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIgPz8gZXJyb3JNZXNzYWdlO1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuZXJyb3IoNTAwLCAnQ291bGQgbm90IGZldGNoIG1lZXR1cHMnKTtcclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgaWYgKHJlcykgaXNMb2Fkb25nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgaWYgKCFyZXMub2spIHRocm93IG5ldyBFcnJvcignRmV0Y2ggZGF0YSBlcnJvciBvY2N1cmVkLCBwbGVhc2UgdHJ5IGFnYWluJyk7XHJcbiAgICAvLyAgICAgbGV0IGRhdGE6IElNZWV0dXAuSU1lZXR1cEl0ZW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gICAgIGNvbnN0IGZldGNoZWRNZWV0dXBzOiBJTWVldHVwLklNZWV0dXBJdGVtW10gPSBbXTtcclxuICAgIC8vICAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGZldGNoZWRNZWV0dXBzLnB1c2goeyAuLi5kYXRhW2tleV0sIGlkOiBrZXkgfSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICByZXR1cm4gZmV0Y2hlZE1lZXR1cHM7XHJcbiAgICAvLyB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7IG9uTW91bnQsIG9uRGVzdHJveSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcclxuICAgIGltcG9ydCB7IHNjYWxlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xyXG4gICAgaW1wb3J0IHsgZmxpcCB9IGZyb20gJ3N2ZWx0ZS9hbmltYXRlJztcclxuXHJcbiAgICBpbXBvcnQgeyBFU2VsZWN0TWVldHVwLCBFTWVldHVwU3RhdHVzIH0gZnJvbSAnLi4vZW51bXMvbWVldHVwJztcclxuXHJcbiAgICBpbXBvcnQgbWVldHVwcyBmcm9tICcuLi9zdG9yZXMvbWVldHVwJztcclxuXHJcbiAgICBpbXBvcnQgTWVldHVwSXRlbSBmcm9tICcuLi9jb21wb25lbnRzL01lZXR1cHMvTWVldHVwSXRlbS5zdmVsdGUnO1xyXG4gICAgaW1wb3J0IE1lZXR1cEZpbHRlciBmcm9tICcuLi9jb21wb25lbnRzL01lZXR1cHMvTWVldHVwRmlsdGVyLnN2ZWx0ZSc7XHJcbiAgICBpbXBvcnQgRWRpdE1lZXR1cCBmcm9tICcuLi9jb21wb25lbnRzL01lZXR1cHMvRWRpdE1lZXR1cC5zdmVsdGUnO1xyXG5cclxuICAgIGltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9VSS9CdXR0b24uc3ZlbHRlJztcclxuICAgIGltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvVUkvTG9hZGluZy5zdmVsdGUnO1xyXG5cclxuICAgIGNvbnN0IGRpc3BhdGNoOiAobmFtZTogc3RyaW5nLCBkZXRhaWw/OiBhbnkpID0+IHZvaWQgPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcclxuXHJcbiAgICBsZXQgaXNGYXZvcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGxldCBtZWV0dXBTdGF0dXM6IEVNZWV0dXBTdGF0dXM7XHJcblxyXG4gICAgZXhwb3J0IGxldCBmZXRjaGVkTWVldHVwczogSU1lZXR1cC5JTWVldHVwSXRlbVtdID0gW107XHJcbiAgICBsZXQgZmlsdGVyZWRNZWV0dXBzOiBJTWVldHVwLklNZWV0dXBJdGVtW10gPSBbXTtcclxuICAgIGxldCBsb2FkZWRNZWV0dXBzOiBJTWVldHVwLklNZWV0dXBJdGVtW10gPSBbXTtcclxuXHJcbiAgICAvLyBmb3Igc3BhXHJcbiAgICAkOiBmaWx0ZXJlZE1lZXR1cHMgPSBpc0Zhdm9yaXRlID8gbG9hZGVkTWVldHVwcy5maWx0ZXIoKHg6IElNZWV0dXAuSU1lZXR1cEl0ZW0pID0+IHguaXNGYXZvcml0ZSkgOiBsb2FkZWRNZWV0dXBzO1xyXG5cclxuICAgIGxldCB1bnN1YnNjcmliZTogRnVuY3Rpb247XHJcblxyXG4gICAgLy8gZmV0Y2ggZGF0YSBpbiBjbGllbnQgc2lkZVxyXG4gICAgLy8gb25Nb3VudChcclxuICAgIC8vICAgICBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICAvLyAgICAgICAgIGF3YWl0IGdldEFQSURhdGEoKTtcclxuICAgIC8vICAgICB9LFxyXG4gICAgLy8gKTtcclxuXHJcbiAgICBvbkRlc3Ryb3koKCkgPT4ge1xyXG4gICAgICAgIGlmICh1bnN1YnNjcmliZSkge1xyXG4gICAgICAgICAgICB1bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIGZvciBzcGFcclxuICAgIG9uTW91bnQoKCkgPT4ge1xyXG4gICAgICAgIHVuc3Vic2NyaWJlID0gbWVldHVwcy5zdWJzY3JpYmUoKGl0ZW06IElNZWV0dXAuSU1lZXR1cEl0ZW1bXSkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkZWRNZWV0dXBzID0gaXRlbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtZWV0dXBzLnNldE1lZXR1cChmZXRjaGVkTWVldHVwcy5yZXZlcnNlKCkpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIC8vIGZvciBzdGF0aWNcclxuICAgIC8vICQ6IGZpbHRlcmVkTWVldHVwcyA9IGlzRmF2b3JpdGUgPyBmZXRjaGVkTWVldHVwcy5maWx0ZXIoKHg6IElNZWV0dXAuSU1lZXR1cEl0ZW0pID0+IHguaXNGYXZvcml0ZSkgOiBmZXRjaGVkTWVldHVwcztcclxuXHJcbiAgICAvLyBvbk1vdW50KCgpID0+IHtcclxuICAgIC8vICAgICBtZWV0dXBzLnNldE1lZXR1cChmZXRjaGVkTWVldHVwcy5yZXZlcnNlKCkpO1xyXG4gICAgLy8gICAgIHVuc3Vic2NyaWJlID0gbWVldHVwcy5zdWJzY3JpYmUoKGl0ZW06IElNZWV0dXAuSU1lZXR1cEl0ZW1bXSkgPT4ge1xyXG4gICAgLy8gICAgICAgICBmZXRjaGVkTWVldHVwcyA9IGl0ZW07XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBhc3luYyBmdW5jdGlvbiBnZXRBUElEYXRhKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgLy8gICAgICAgICBpc0xvYWRvbmcgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB1bnN1YnNjcmliZSA9IG1lZXR1cHMuc3Vic2NyaWJlKChpdGVtcykgPT4gKGZldGNoZWRNZWV0dXBzID0gaXRlbXMpKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJyA9PiAnLCB1bnN1YnNjcmliZSk7XHJcbiAgICAvLyAgICAgICAgIGxldCByZXM6IGFueSA9IGF3YWl0IGZldGNoKCdodHRwczovL3N2ZWx0ZS1tZWV1cC1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb20vbWVldHVwcy5qc29uJykuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaXNMb2Fkb25nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnI7XHJcbiAgICAvLyAgICAgICAgICAgICBlcnJvck1lc3NhZ2UgPSBlcnIgPz8gZXJyb3JNZXNzYWdlO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChyZXMpIGlzTG9hZG9uZyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKCdGZXRjaCBkYXRhIGVycm9yIG9jY3VyZWQsIHBsZWFzZSB0cnkgYWdhaW4nKTtcclxuICAgIC8vICAgICAgICAgbGV0IGRhdGE6IElNZWV0dXAuSU1lZXR1cEl0ZW0gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gICAgICAgICBjb25zdCBsb2FkTWVldHVwczogSU1lZXR1cC5JTWVldHVwSXRlbVtdID0gW107XHJcbiAgICAvLyAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgICAgIGxvYWRNZWV0dXBzLnB1c2goeyAuLi5kYXRhW2tleV0sIGlkOiBrZXkgfSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIG1lZXR1cHMuc2V0TWVldHVwKGxvYWRNZWV0dXBzLnJldmVyc2UoKSk7XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNhdmVNZWV0dXAoKTogdm9pZCB7XHJcbiAgICAgICAgY2xvc2VNb2RhbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsaWNrTmV3TWVldHVwKCk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cFN0YXR1cyA9IEVNZWV0dXBTdGF0dXMuZWRpdDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cFN0YXR1cyA9IEVNZWV0dXBTdGF0dXMubnVsbDtcclxuICAgICAgICBpZCA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGVkaXRNZWV0dXAoZSk6IHZvaWQge1xyXG4gICAgICAgIG1lZXR1cFN0YXR1cyA9IEVNZWV0dXBTdGF0dXMuZWRpdDtcclxuICAgICAgICBpZCA9IGUuZGV0YWlsO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdE1lZXR1cChlOiBhbnkpIHtcclxuICAgICAgICBpc0Zhdm9yaXRlID0gZS5kZXRhaWwgPT09IEVTZWxlY3RNZWV0dXAuZmF2b3JpdGU7XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN2ZWx0ZTpoZWFkPlxyXG4gICAgPHRpdGxlPkFsbCBNZWV0dXBzPC90aXRsZT5cclxuPC9zdmVsdGU6aGVhZD5cclxuXHJcbnsjaWYgbWVldHVwU3RhdHVzID09PSBFTWVldHVwU3RhdHVzLmVkaXR9XHJcbiAgICA8RWRpdE1lZXR1cCBvbjpzYXZlLWRhdGE9e3NhdmVNZWV0dXB9IG9uOmNsb3NlLW1vZGFsPXtjbG9zZU1vZGFsfSB7aWR9IC8+XHJcbnsvaWZ9XHJcblxyXG57I2lmIGlzTG9hZG9uZ31cclxuICAgIDxMb2FkaW5nIC8+XHJcbns6ZWxzZX1cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwibWVldHVwLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPE1lZXR1cEZpbHRlciBvbjpzZWxlY3Q9e3NlbGVjdE1lZXR1cH0gLz5cclxuXHJcbiAgICAgICAgPEJ1dHRvbiBvbjpjbGljaz17Y2xpY2tOZXdNZWV0dXB9Pk5ldyBNZWV0dXA8L0J1dHRvbj5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICB7I2lmIGZpbHRlcmVkTWVldHVwcy5sZW5ndGggPT09IDB9XHJcbiAgICAgICAgPHAgY2xhc3M9XCJuby1tZWV0dXBcIj5ObyBtZWV0dXBzIGZvdW5kLCB5b3UgY2FuIHN0YXJ0IGFkZGluZyBzb21lIG1lZXR1cHM8L3A+XHJcbiAgICB7L2lmfVxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZmV0Y2hlZE1lZXR1cHNcIj5cclxuICAgICAgICB7I2VhY2ggZmlsdGVyZWRNZWV0dXBzIGFzIG1lZXR1cCAobWVldHVwLmlkKX1cclxuICAgICAgICAgICAgPGRpdiB0cmFuc2l0aW9uOnNjYWxlPXt7IGR1cmF0aW9uOiA4MDAgfX0gYW5pbWF0ZTpmbGlwPXt7IGR1cmF0aW9uOiA4MDAgfX0+XHJcbiAgICAgICAgICAgICAgICA8TWVldHVwSXRlbSB7bWVldHVwfSBvbjplZGl0LW1lZXR1cD17ZWRpdE1lZXR1cH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey9lYWNofVxyXG4gICAgPC9zZWN0aW9uPlxyXG57L2lmfVxyXG5cclxuPHN0eWxlPlxyXG4gICAgLmZldGNoZWRNZWV0dXBzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5mZXRjaGVkTWVldHVwcyB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZWV0dXAtY29udHJvbHMge1xyXG4gICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAubm8tbWVldHVwIHtcclxuICAgICAgICBtYXJnaW46IDFyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iXSwibmFtZXMiOlsibGluZWFyIiwibWVldHVwcyJdLCJtYXBwaW5ncyI6Ijs7O0FBNkRBLFNBQVMsUUFBUSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7QUFDdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztBQUMzQjs7QUN0QkEsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLE1BQU0sR0FBR0EsUUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ3pFLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDOUMsSUFBSSxPQUFPO0FBQ1gsUUFB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
