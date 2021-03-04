import { _ as writable, S as SvelteComponentDev, b as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, Q as empty, l as insert_dev, G as group_outros, o as transition_out, H as check_outros, t as transition_in, h as detach_dev, L as bubble, c as create_slot, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, J as listen_dev, u as update_slot, M as prop_dev } from './client.ce0ed8b4.js';

var EInputType;
(function (EInputType) {
    EInputType["number"] = "number";
    EInputType["text"] = "text";
    EInputType["email"] = "email";
    EInputType["password"] = "password";
    EInputType["textarea"] = "textarea";
})(EInputType || (EInputType = {}));
var EButtonType;
(function (EButtonType) {
    EButtonType["button"] = "button";
    EButtonType["submit"] = "submit";
    EButtonType["reset"] = "reset";
})(EButtonType || (EButtonType = {}));
var EMeetupStatus;
(function (EMeetupStatus) {
    EMeetupStatus[EMeetupStatus["null"] = 0] = "null";
    EMeetupStatus[EMeetupStatus["create"] = 1] = "create";
    EMeetupStatus[EMeetupStatus["edit"] = 2] = "edit";
})(EMeetupStatus || (EMeetupStatus = {}));
var EPageAction;
(function (EPageAction) {
    EPageAction[EPageAction["null"] = 0] = "null";
    EPageAction[EPageAction["overview"] = 1] = "overview";
    EPageAction[EPageAction["detail"] = 2] = "detail";
})(EPageAction || (EPageAction = {}));
var ESelectMeetup;
(function (ESelectMeetup) {
    ESelectMeetup[ESelectMeetup["all"] = 0] = "all";
    ESelectMeetup[ESelectMeetup["favorite"] = 1] = "favorite";
})(ESelectMeetup || (ESelectMeetup = {}));

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

/* src\components\UI\Button.svelte generated by Svelte v3.35.0 */
const file = "src\\components\\UI\\Button.svelte";

// (14:0) {:else}
function create_else_block(ctx) {
	let button_1;
	let button_1_type_value;
	let button_1_class_value;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			button_1 = element("button");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			button_1 = claim_element(nodes, "BUTTON", { type: true, class: true, disabled: true });
			var button_1_nodes = children(button_1);
			if (default_slot) default_slot.l(button_1_nodes);
			button_1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(button_1, "type", button_1_type_value = /*button*/ ctx[0].type);
			attr_dev(button_1, "class", button_1_class_value = "" + (/*button*/ ctx[0].mode + " " + /*button*/ ctx[0].color + " svelte-1q3l81p"));
			button_1.disabled = /*disabled*/ ctx[1];
			add_location(button_1, file, 14, 4, 281);
		},
		m: function mount(target, anchor) {
			insert_dev(target, button_1, anchor);

			if (default_slot) {
				default_slot.m(button_1, null);
			}

			current = true;

			if (!mounted) {
				dispose = listen_dev(button_1, "click", /*click_handler*/ ctx[4], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}

			if (!current || dirty & /*button*/ 1 && button_1_type_value !== (button_1_type_value = /*button*/ ctx[0].type)) {
				attr_dev(button_1, "type", button_1_type_value);
			}

			if (!current || dirty & /*button*/ 1 && button_1_class_value !== (button_1_class_value = "" + (/*button*/ ctx[0].mode + " " + /*button*/ ctx[0].color + " svelte-1q3l81p"))) {
				attr_dev(button_1, "class", button_1_class_value);
			}

			if (!current || dirty & /*disabled*/ 2) {
				prop_dev(button_1, "disabled", /*disabled*/ ctx[1]);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(button_1);
			if (default_slot) default_slot.d(detaching);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(14:0) {:else}",
		ctx
	});

	return block;
}

// (12:0) {#if button.href}
function create_if_block(ctx) {
	let a;
	let a_href_value;
	let current;
	const default_slot_template = /*#slots*/ ctx[3].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[2], null);

	const block = {
		c: function create() {
			a = element("a");
			if (default_slot) default_slot.c();
			this.h();
		},
		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			if (default_slot) default_slot.l(a_nodes);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a, "href", a_href_value = /*button*/ ctx[0].href);
			attr_dev(a, "class", "svelte-1q3l81p");
			add_location(a, file, 12, 4, 232);
		},
		m: function mount(target, anchor) {
			insert_dev(target, a, anchor);

			if (default_slot) {
				default_slot.m(a, null);
			}

			current = true;
		},
		p: function update(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 4) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[2], dirty, null, null);
				}
			}

			if (!current || dirty & /*button*/ 1 && a_href_value !== (a_href_value = /*button*/ ctx[0].href)) {
				attr_dev(a, "href", a_href_value);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(a);
			if (default_slot) default_slot.d(detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(12:0) {#if button.href}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*button*/ ctx[0].href) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				} else {
					if_block.p(ctx, dirty);
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Button", slots, ['default']);
	

	let { button = {
		type: EButtonType.button,
		href: "",
		mode: "",
		color: ""
	} } = $$props;

	let { disabled = false } = $$props;
	const writable_props = ["button", "disabled"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Button> was created with unknown prop '${key}'`);
	});

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("button" in $$props) $$invalidate(0, button = $$props.button);
		if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
		if ("$$scope" in $$props) $$invalidate(2, $$scope = $$props.$$scope);
	};

	$$self.$capture_state = () => ({ EButtonType, button, disabled });

	$$self.$inject_state = $$props => {
		if ("button" in $$props) $$invalidate(0, button = $$props.button);
		if ("disabled" in $$props) $$invalidate(1, disabled = $$props.disabled);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [button, disabled, $$scope, slots, click_handler];
}

class Button extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { button: 0, disabled: 1 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Button",
			options,
			id: create_fragment.name
		});
	}

	get button() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set button(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get disabled() {
		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set disabled(value) {
		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Button as B, ESelectMeetup as E, ServiceValidation as S, EInputType as a, ServiceGenerate as b, EMeetupStatus as c, meetupsStore as m };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLjI3NmM1ZTg1LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZW51bXMvbWVldHVwLnRzIiwiLi4vLi4vLi4vc3JjL2hlbHBlci9nZW5lcmF0ZS50cyIsIi4uLy4uLy4uL3NyYy9oZWxwZXIvdmFsaWRhdGlvbi50cyIsIi4uLy4uLy4uL3NyYy9zdG9yZXMvbWVldHVwLnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvVUkvQnV0dG9uLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbCxudWxsLG51bGwsIjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQgdHlwZSB7IElNZWV0dXAgfSBmcm9tICcuLi8uLi9tb2RhbHMnO1xyXG4gICAgaW1wb3J0IHsgRUJ1dHRvblR5cGUgfSBmcm9tICcuLi8uLi9lbnVtcy9tZWV0dXAnO1xyXG5cclxuICAgIGV4cG9ydCBsZXQgYnV0dG9uOiBJTWVldHVwLklCdXR0b24gPSB7XHJcbiAgICAgICAgdHlwZTogRUJ1dHRvblR5cGUuYnV0dG9uLFxyXG4gICAgICAgIGhyZWY6ICcnLFxyXG4gICAgICAgIG1vZGU6ICcnLFxyXG4gICAgICAgIGNvbG9yOiAnJyxcclxuICAgIH07XHJcblxyXG4gICAgZXhwb3J0IGxldCBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG48L3NjcmlwdD5cclxuXHJcbnsjaWYgYnV0dG9uLmhyZWZ9XHJcbiAgICA8YSBocmVmPXtidXR0b24uaHJlZn0+PHNsb3QgLz48L2E+XHJcbns6ZWxzZX1cclxuICAgIDxidXR0b24gdHlwZT17YnV0dG9uLnR5cGV9IGNsYXNzPVwie2J1dHRvbi5tb2RlfSB7YnV0dG9uLmNvbG9yfVwiIHtkaXNhYmxlZH0gb246Y2xpY2s+IDxzbG90IC8+IDwvYnV0dG9uPlxyXG57L2lmfVxyXG5cclxuPHN0eWxlPlxyXG4gICAgYnV0dG9uLFxyXG4gICAgYSB7XHJcbiAgICAgICAgZm9udDogaW5oZXJpdDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3JNYWluO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvck1haW47XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMjYpO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG5cclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjphY3RpdmUge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTQwNzYzO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICNlNDA3NjM7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggOHB4IHJnYmEoNzcsIDUxLCA1MSwgMC4yNik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OTU5NTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuXHJcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3VjY2VzcyB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzAxYTEyOTtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMwMWExMjk7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Y2Nlc3M6aG92ZXIsXHJcbiAgICAuc3VjY2VzczphY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxYWM3NDU7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMWFjNzQ1O1xyXG4gICAgfVxyXG5cclxuICAgIC5vdXRsaW5lIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogJGNvbG9yTWFpbjtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdXRsaW5lOmhvdmVyLFxyXG4gICAgLm91dGxpbmU6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjN2RlO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm91dGxpbmU6ZGlzYWJsZWQsXHJcbiAgICAub3V0bGluZTpkaXNhYmxlZDpob3ZlcixcclxuICAgIC5vdXRsaW5lOmRpc2FibGVkOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICNjY2M7XHJcbiAgICB9XHJcblxyXG4gICAgLm91dGxpbmUuc3VjY2VzcyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDFhMTI5O1xyXG4gICAgICAgIGNvbG9yOiAjMDFhMTI5O1xyXG4gICAgfVxyXG5cclxuICAgIC5vdXRsaW5lLnN1Y2Nlc3M6aG92ZXIsXHJcbiAgICAub3V0bGluZS5zdWNjZXNzOmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2MyZmZkMTtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0lBQVk7QUFBWixXQUFZLFVBQVU7SUFDbEIsK0JBQWlCLENBQUE7SUFDakIsMkJBQWEsQ0FBQTtJQUNiLDZCQUFlLENBQUE7SUFDZixtQ0FBcUIsQ0FBQTtJQUNyQixtQ0FB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
